		Ext.define('MJbahan.controller.Cmjbahan',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmjbahan', 'FRMmjbahan'],
			stores  : ['Smjbahan'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMmjbahan',
				selector: 'FRMmjbahan',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmjbahan > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
					'GRIDmjbahan > toolbar > button[action=delete]' :{
						click: this.test
                                                //alert('test');
					},
                                        'GRIDmjbahan > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
					'GRIDmjbahan' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmjbahan button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmjbahan actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setTitle('Insert New Jenis Bahan');
				win.setAction('add');
				win.down('form').getForm().reset();
				win.show();
			},    
                        searchData:function (f,e) {
                            var store = this.getSmjbahanStore();//Ext.getStore('STassetlocation');
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
				win.setTitle('Update Jenis Bahan');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Jenis Bahan', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmjbahanStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'Mjbahan/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Jenis Bahan', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete jbahan","Delete Success"," verb", record.data['jbahanName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Jenis Bahan', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Jenis Bahan', 'Update Data Success', 'success');
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
                                var store = this.getSmjbahanStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('MJbahan.model.Mmjbahan', values);
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
                                    console.log("Deleting " + this.data.jbahan_id);
                                    var record = grid.getStore().getById(this.data.jbahan_id);
                                    grid.getStore().remove(record);
                                });
                            }                        
		});