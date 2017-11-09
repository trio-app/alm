		Ext.define('RToutCustomer.controller.CRToutCustomer',{
			extend: 'Ext.app.Controller',
			views: ['VRToutCustomer'],
			stores  : ['SRToutCustomer', 'SRToutCustomerDetail'],
			refs: [{
                            ref: 'gridSelected',
                            xtype: 'RToutCustomerSelectedGrid',
                            selector: 'RToutCustomerSelectedGrid'
                            //autoCreate: true
			},{
                            ref: 'formRToutCustomer',
                            xtype: 'FRToutCustomer',
                            selector: 'FRToutCustomer'
                        }],
			init: function(){
				this.control({
                                        'RToutCustomerGrid > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RToutCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'RToutCustomerGrid > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRToutCustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'RToutCustomerGrid': {
                                            itemclick: this.getData
                                        }
				});
			},
                        getData: function(grid, record){
                            var grid = this.getGridSelected();
                            //var grid = Ext.getCmp('InboundCancelSelectedGrid');
                            var store = grid.getStore();
                            //store.reload();
                                
                            Ext.Ajax.request({
                                url: baseurl + 'RToutCustomer/getGrid',
                                params: {receiptout_doc: record.data.receiptout_doc},
                                method: 'POST',
                                fields: ['receiptout_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        searchData:function (f,e) {
                            var store = this.getSRToutCustomerStore();//Ext.getStore('STassetlocation');
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
                        filterasset: function (btn) {
                            var win = this.getFormRToutCustomer();
                            var values = win.down('form').getValues();
                            var store = this.getSRToutCustomerStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        }
                        

		});