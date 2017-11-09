		Ext.define('RToutDate.controller.CRToutDate',{
			extend: 'Ext.app.Controller',
			views: ['VRToutDate'],
			stores  : ['SRToutDate','SRToutDateDetail'],
			refs: [{
                                ref: 'gridSelected',
                                xtype: 'RToutDateSelectedGrid',
                                selector: 'RToutDateSelectedGrid'
                        },{
				ref: 'formRToutDate',
				xtype: 'FRToutDate',
				selector: 'FRToutDate',
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
                                        'FRToutDate >  button[itemId=searchfilter]': {
                                                click: this.filterasset
                                        },
                                        'RToutDateGrid > toolbar > button[itemId=searchData]':{
                                                click: this.searchData
                                        },                                        
					'RToutDateGrid' :{
						itemclick: this.getData
					},
					
				});
			},
			filterasset: function (btn) {
                            var win = this.getFormRToutDate();
                            var values = win.down('form').getValues();
                            var store = this.getSRToutDateStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);  
                            
                        },
                        searchData:function (f,e) {
                            var store = this.getSRToutDateStore();//Ext.getStore('STassetlocation');
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
                                url: baseurl + 'RToutDate/getGrid',
                                params: {receiptout_doc: record.data.receiptout_doc},
                                method: 'POST',
                                fields: ['receiptout_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                       exportTransaksi: function(){
                            var link = baseurl + 'RToutDate/exportTransaksi';
                            Ext.Ajax.request({
                                url: link,
                                success: function(transport){ 
                                    window.open(link); 
                                },
                                async: false
                            });
                       },
                        searchDataCustomer:function (f,e) {
                            var store = this.getSRToutDateStore();//Ext.getStore('STassetlocation');
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
                                                                 html : '<iframe src="'+ baseurl +'RToutDate/reportPreview/'+ record.data.transaksi_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        }
                        
		});