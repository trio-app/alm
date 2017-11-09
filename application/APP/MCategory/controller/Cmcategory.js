		Ext.define('MCategory.controller.Cmcategory',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmcategory', 'FRMmcategory'],
			stores  : ['Smcategory'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMmcategory',
				selector: 'FRMmcategory',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmcategory > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
					'GRIDmcategory > toolbar > button[action=delete]' :{
						click: this.test
                                                //alert('test');
					},
                                        'GRIDmcategory > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
					'GRIDmcategory' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmcategory button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmcategory actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setTitle('Insert New Category');
				win.setAction('add');
				win.down('form').getForm().reset();
				win.show();
			},    
                        searchData:function (f,e) {
                            var store = this.getSmcategoryStore();//Ext.getStore('STassetlocation');
                            if (e.getKey() == e.ENTER) {
                                store.remoteFilter = false;
                                store.clearFilter();
                                store.remoteFilter = true;
                                store.filter([{
                                        property:'filtername',
                                        anyMatch: true,
                                        value   : f.value
                                    } ]);
                            }

                        },
			onRowdblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setTitle('Update Category');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Category', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmcategoryStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'MCategory/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Category', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Category', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Category', 'Update Data Success', 'success');
                                                    break;
                                            }

                                        },
                                        failure: function(response){
                                            //createAlert('Error ' + response.status, response.responseText, 'error');
                                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                                        }
                                    });
                        },                        
			doSaveform: function(){
                                var win = this.getFormWindow();
                                var store = this.getSmcategoryStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('MCategory.model.Mmcategory', values);
                                console.log(action);
                                
				if(action == 'edit'){
                                    if(form.isValid()){
                                        this.doProsesCRUD('update',recValue);
                                        win.close();
                                    }
				}else{
                                    if(form.isValid()){
                                        this.doProsesCRUD('create',recValue);
                                        win.close();
                                    }
				}
			},
                        deleteMultipleRows: function() {
                                var rowsToDelete = this.getSelectionModel().getSelections();
                                var grid = this;
                                Ext.iterate(rowsToDelete, function(key, item) {
                                    console.log("Deleting " + this.data.category_id);
                                    var record = grid.getStore().getById(this.data.category_id);
                                    grid.getStore().remove(record);
                                });
                            }                        
		});