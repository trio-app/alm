		Ext.define('RCustomer.controller.CRCustomer',{
			extend: 'Ext.app.Controller',
			views: ['VRCustomer'],
			stores  : ['SRCustomer', 'SRCustomerDetail'],
			refs: [{
                            ref: 'gridSelected',
                            xtype: 'RCustomerSelectedGrid',
                            selector: 'RCustomerSelectedGrid'
                            //autoCreate: true
			},{
                            ref: 'formRCustomer',
                            xtype: 'FRCustomer',
                            selector: 'FRCustomer'
                        },{
                            ref: 'formInboundCancelMaterial',
                            xtype: 'FRMInboundCancelMaterial',
                            selector: 'FRMInboundCancelMaterial',
                            autoCreate: true
                        }],
			init: function(){
				this.control({
                                        'RCustomerGrid > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'RCustomerGrid > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRCustomer button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'RCustomerGrid': {
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
                                url: baseurl + 'RCustomer/getGrid',
                                params: {transaksi_doc: record.data.transaksi_doc},
                                method: 'POST',
                                fields: ['transaksi_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        searchData:function (f,e) {
                            var store = this.getSRCustomerStore();//Ext.getStore('STassetlocation');
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
                            var win = this.getFormRCustomer();
                            var values = win.down('form').getValues();
                            var store = this.getSRCustomerStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        }
                        

		});