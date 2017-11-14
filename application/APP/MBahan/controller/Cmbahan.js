		Ext.define('MBahan.controller.Cmbahan',{
			extend: 'Ext.app.Controller',
			views: ['GRIDmbahan', 'FRMmbahan'],
			stores  : ['Smbahan'],
			refs: [{
				ref: 'FRMmbahan',
				xtype: 'FRMmbahan',
				selector: 'FRMmbahan',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDmbahan > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
					'GRIDmbahan > toolbar > button[action=delete]' :{
						click: this.test
                                                //alert('test');
					},
                                        'GRIDmbahan > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
					'GRIDmbahan' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMmbahan button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDmbahan actioncolumn': {
                                          itemclick: this.deleteItem
                                        }
				});
			},
                        showAddForm: function(){
				var win = this.getFRMmbahan();
				win.setTitle('Insert Bahan Item');
				
                                win.setAction('add');
                                

				var win = this.getFRMmbahan();
				win.setTitle('Insert Produk');
				win.setAction('add');

				win.down('form').getForm().reset();
				win.show();
			},
                       
                        searchData:function (f,e) {
                            var store = this.getSmbahanStore();//Ext.getStore('STassetlocation');
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
				var win = this.getFRMmbahan();
				win.setTitle('Update Produk');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Produk', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        doProsesCRUD : function (inAction,record){
                            var store = this.getSmbahanStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'MBahan/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(record.data),
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Produk', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Bahan Item","Delete Success"," verb", record.data['Barang ItemName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Produk', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Produk', 'Update Data Success', 'success');
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
                                var win = this.getFRMmbahan();
                                var store = this.getSmbahanStore();
                                var form = win.down('form');
                                
                                var form = this.up('form').getForm();
                                            //console.log(form.getValues());
                                                form.submit({
                                                    url: baseurl + 'MBahan/upload',
                                                    waitMsg: 'Uploading your photo...',
                                                    success: function(status, msg) {
                                                        //msg('Success', tpl.apply(o.result));
                                                        Ext.MessageBox.alert(status, msg);
                                                    }
                                                });
                                        
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                
                                var recValue = Ext.create('MBahan.model.Mmbahan', values);
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