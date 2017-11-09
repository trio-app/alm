		Ext.define('MUnit.controller.Cmunit',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmunit', 'FRMmunit'],
			stores  : ['Smunit'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMmunit',
				selector: 'FRMmunit',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmunit > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
                                        'GRIDmunit > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
					'GRIDmunit' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmunit button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmunit actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setTitle('Insert New Unit');
				win.setAction('add');
				win.down('form').getForm().reset();
				win.show();
			},    
                        searchData:function (f,e) {
                            var store = this.getSmunitStore();//Ext.getStore('STassetlocation');
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
				win.setTitle('Update Unit');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Unit', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmunitStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'MUnit/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Unit', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Unit', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Unit', 'Update Data Success', 'success');
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
                                var store = this.getSmunitStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('MUnit.model.Mmunit', values);
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
                                    console.log("Deleting " + this.data.contact_id);
                                    var record = grid.getStore().getById(this.data.contact_id);
                                    grid.getStore().remove(record);
                                });
                            }                        
		});