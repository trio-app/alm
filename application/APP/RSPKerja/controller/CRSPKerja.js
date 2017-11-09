		Ext.define('RSPKerja.controller.CRSPKerja',{
			extend: 'Ext.app.Controller',
			views: ['VRSPKerja'],
			stores  : ['SRSPKerja', 'SRSPKerjaDetail'],
			refs: [{
                            ref: 'gridSelected',
                            xtype: 'RSPKerjaSelectedGrid',
                            selector: 'RSPKerjaSelectedGrid'
                            //autoCreate: true
			},{
                            ref: 'formRSPKerja',
                            xtype: 'FRSPKerja',
                            selector: 'FRSPKerja'
                        },{
                            ref: 'formInboundCancelMaterial',
                            xtype: 'FRMInboundCancelMaterial',
                            selector: 'FRMInboundCancelMaterial',
                            autoCreate: true
                        }],
			init: function(){
				this.control({
                                        'RSPKerjaGrid > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RSPKerjaSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },
                                        'RSPKerjaGrid > toolbar > textfield[itemId=searchData]': {
                                          specialkey: this.searchData
                                        },
                                        'FRSPKerja button[itemId=searchfilter]': {
                                            click: this.filterasset
                                        },
                                        'RSPKerjaGrid': {
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
                                url: baseurl + 'RSPKerja/getGrid',
                                params: {transaksi_doc: record.data.transaksi_doc},
                                method: 'POST',
                                fields: ['transaksi_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                        searchData:function (f,e) {
                            var store = this.getSRSPKerjaStore();//Ext.getStore('STassetlocation');
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
                            var win = this.getFormRSPKerja();
                            var values = win.down('form').getValues();
                            var store = this.getSRSPKerjaStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);
                        }
                        

		});