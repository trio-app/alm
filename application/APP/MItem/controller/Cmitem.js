		Ext.define('MItem.controller.Cmitem',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmitem', 'FRMmitem'],
			stores  : ['Smitem'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMmitem',
				selector: 'FRMmitem',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmitem > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
					'GRIDmitem > toolbar > button[action=delete]' :{
						click: this.test
                                                //alert('test');
					},
                                        'GRIDmitem > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },
					'GRIDmitem' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmitem button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmitem actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setTitle('Insert New Item');
				win.setAction('add');
				win.down('form').getForm().reset();
				win.show();
                                
                                var combo = Ext.getCmp('CATEGORY');
                                combo.store.load();
                                
                                var combo = Ext.getCmp('UNIT');
                                combo.store.load();
			},    
                        searchData:function (f,e) {
                            var store = this.getSmitemStore();//Ext.getStore('STassetlocation');
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
				win.setTitle('Update Item');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
                                
                                var combo = Ext.getCmp('CATEGORY');
                                combo.store.load();
                                
                                var combo = Ext.getCmp('UNIT');
                                combo.store.load();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Item', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmitemStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'MItem/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Item', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Item","Delete Success"," verb", record.data['ItemName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Item', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Item', 'Update Data Success', 'success');
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
                                var store = this.getSmitemStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('MItem.model.Mmitem', values);
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
                                    console.log("Deleting " + this.data.item_id);
                                    var record = grid.getStore().getById(this.data.item_id);
                                    grid.getStore().remove(record);
                                });
                            }                        
		});