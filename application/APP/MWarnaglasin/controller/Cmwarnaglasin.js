		Ext.define('MWarnaglasin.controller.Cmwarnaglasin',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmwarnaglasin', 'FRMmwarnaglasin'],
			stores  : ['Smwarnaglasin'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMmwarnaglasin',
				selector: 'FRMmwarnaglasin',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmwarnaglasin > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
					'GRIDmwarnaglasin > toolbar > button[action=delete]' :{
						click: this.test
                                                //alert('test');
					},
                                        'GRIDmwarnaglasin > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
					'GRIDmwarnaglasin' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmwarnaglasin button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmwarnaglasin actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setAction('add');
                                win.setTitle('Inser New Warna Glasin');
				win.down('form').getForm().reset();
				win.show();
			},    
                        searchData:function (f,e) {
                            var store = this.getSmwarnaglasinStore();//Ext.getStore('STassetlocation');
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
				win.setTitle('Update Warna Glasin');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Warna Glasin', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmwarnaglasinStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'MWarnaglasin/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Warna Glasin', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete warnaglasin","Delete Success"," verb", record.data['warnaglasinName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Warna Glasin', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Warna Glasin', 'Update Data Success', 'success');
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
                                var store = this.getSmwarnaglasinStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('MWarnaglasin.model.Mmwarnaglasin', values);
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
                                    console.log("Deleting " + this.data.warnaglasin_id);
                                    var record = grid.getStore().getById(this.data.warnaglasin_id);
                                    grid.getStore().remove(record);
                                });
                            }                        
		});