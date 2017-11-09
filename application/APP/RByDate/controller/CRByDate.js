		Ext.define('RByDate.controller.CRByDate',{
			extend: 'Ext.app.Controller',
			views: ['VRByDate'],
			stores  : ['SRByDate','SRByDateDetail'],
			refs: [{
                                ref: 'gridSelected',
                                xtype: 'RByDateSelectedGrid',
                                selector: 'RByDateSelectedGrid'
                        },{
				ref: 'formByDate',
				xtype: 'FRMByDate',
				selector: 'FRMByDate',
				//autoCreate: true
			}],
			init: function(){
				this.control({
                                        'RCustomerGrid > toolbar > button[action=export]': {
                                            click: this.exportTransaksi
                                        },
                                        'RCustomerSelectedGrid > toolbar > button[action=exportdetail]': {
                                            click: this.exportDetail
                                        },                                      
                                        'FRMByDate >  button[itemId=searchfilter]': {
                                                click: this.filterasset
                                        },
                                        'RByDateGrid > toolbar > button[itemId=searchData]':{
                                                click: this.searchData
                                        },                                        
					'RByDateGrid' :{
						itemclick: this.getData
					},
					
				});
			},
			filterasset: function (btn) {
                            var win = this.getFormByDate();
                            var values = win.down('form').getValues();
                            var store = this.getSRByDateStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);  
                            
                        },
                        searchData:function (f,e) {
                            var store = this.getSRByDateStore();//Ext.getStore('STassetlocation');
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
                        getData: function(grid, record){
                            var grid = this.getGridSelected();
                            //var grid = Ext.getCmp('InboundCancelSelectedGrid');
                            var store = grid.getStore();
                            //store.reload();
                                
                            Ext.Ajax.request({
                                url: baseurl + 'RByDate/getGrid',
                                params: {transaksi_doc: record.data.transaksi_doc},
                                method: 'POST',
                                fields: ['transaksi_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                       exportTransaksi: function(){
                            var link = baseurl + 'RByDate/exportTransaksi';
                            Ext.Ajax.request({
                                url: link,
                                success: function(transport){ 
                                    window.open(link); 
                                },
                                async: false
                            });
                       },
                        searchDataCustomer:function (f,e) {
                            var store = this.getSRByDateStore();//Ext.getStore('STassetlocation');
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
                                   
			
                        reportPreview:function(view, cell, rowIndex, colIndex, e, record, row){
                            var previewPrint = Ext.create('Ext.window.Window', {
                                                        title: 'Print Preview',
                                                        width: 1000,
                                                        height: 600,
                                                        modal   : true,
                                                        closeAction: 'hide',
                                                        items: [{ 
                                                                 xtype: 'component',
                                                                 html : '<iframe src="'+ baseurl +'RByDate/reportPreview/'+ record.data.transaksi_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        }
                        
		});