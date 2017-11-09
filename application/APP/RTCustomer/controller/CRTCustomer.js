		Ext.define('RTCustomer.controller.CRTCustomer',{
			extend: 'Ext.app.Controller',
			views: ['VRTCustomer'],
			stores  : ['SRTCustomer', 'SRTCustomerDetail'],
			refs: [{
                            ref: 'gridSelected',
                            xtype: 'RTCustomerSelectedGrid',
                            selector: 'RTCustomerSelectedGrid'
                            //autoCreate: true
			},{
                            ref: 'formRTCustomer',
                            xtype: 'FRTCustomer',
                            selector: 'FRTCustomer'
                        }],
			init: function(){
				this.control({
                                        'RTCustomerGrid > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RTCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'RTCustomerGrid > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRTCustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'RTCustomerGrid': {
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
                                url: baseurl + 'RTCustomer/getGrid',
                                params: {receipt_doc: record.data.receipt_doc},
                                method: 'POST',
                                fields: ['receipt_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        searchData:function (f,e) {
                            var store = this.getSRTCustomerStore();//Ext.getStore('STassetlocation');
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
                            var win = this.getFormRTCustomer();
                            var values = win.down('form').getValues();
                            var store = this.getSRTCustomerStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        }
                        

		});