		Ext.define('RTDate.controller.CRTDate',{
			extend: 'Ext.app.Controller',
			views: ['VRTDate'],
			stores  : ['SRTDate','SRTDateDetail'],
			refs: [{
                                ref: 'gridSelected',
                                xtype: 'RTDateSelectedGrid',
                                selector: 'RTDateSelectedGrid'
                        },{
				ref: 'formRTDate',
				xtype: 'FRMTDate',
				selector: 'FRMTDate',
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
                                        'FRMTDate >  button[itemId=searchfilter]': {
                                                click: this.filterasset
                                        },
                                        'RTDateGrid > toolbar > button[itemId=searchData]':{
                                                click: this.searchData
                                        },                                        
					'RTDateGrid' :{
						itemclick: this.getData
					},
					
				});
			},
			filterasset: function (btn) {
                            var win = this.getFormRTDate();
                            var values = win.down('form').getValues();
                            var store = this.getSRTDateStore();

                            store.remoteFilter = false;
                            store.clearFilter();
                            store.remoteFilter = true;
                            store.filter([{
                                    value   : values
                                } ]);  
                            
                        },
                        searchData:function (f,e) {
                            var store = this.getSRTDateStore();//Ext.getStore('STassetlocation');
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
                                url: baseurl + 'RTDate/getGrid',
                                params: {receipt_doc: record.data.receipt_doc},
                                method: 'POST',
                                fields: ['receipt_doc'],
                                success: function(transport){
                                    store.loadData(Ext.decode(transport.responseText));
                                }
                            });
                        },
                       exportTransaksi: function(){
                            var link = baseurl + 'RTDate/exportTransaksi';
                            Ext.Ajax.request({
                                url: link,
                                success: function(transport){ 
                                    window.open(link); 
                                },
                                async: false
                            });
                       },
                        searchDataCustomer:function (f,e) {
                            var store = this.getSRTDateStore();//Ext.getStore('STassetlocation');
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
                                                                 html : '<iframe src="'+ baseurl +'RTDate/reportPreview/'+ record.data.transaksi_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        }
                        
		});