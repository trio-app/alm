Ext.define('RTDate.view.VRTDate',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.RTDateGrid',
    title: 'Tanda Terima IN',
    border: 2,
    store: 'SRTDate',
    //frame:true,
    height: 250,
    requires: ['Ext.ux.exporter.Exporter'],
    /*layout: [{
       type: 'vbox'     
    }],
    */
            initComponent: function () {
                         this.tbar = [
                                    {
                                        xtype: 'exporterbutton',
                                        text: 'Export',
                                        //format: 'excel',
                                        //title: 'Report Transaksi Tanda Terima By Date'
                                   },
                                    '->',
                                  {
                                      xtype: 'textfield',
                                      itemId: 'searchData',
                                      emptyText: 'Search Data',
                                      fieldStyle: 'text-align: left;align:right;'
                                  }
                                ];
                            
                            this.columns= [
                                {header: 'No.', xtype: 'rownumberer'},
                                {header: 'Customer', dataIndex: 'customer_nama', width:150},
                                {header: 'Date', dataIndex: 'receipt_date', width:120},
                                {header: 'Document No.', dataIndex: 'receipt_doc', width:150},
                                {header: 'Nominal', dataIndex:'Price',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
                                                  
                            ];    
                            this.bbar = Ext.create('Ext.PagingToolbar', {
                                store: 'SRTDate',
                                displayInfo: true,
                                displayMsg: 'Total Data {0} - {1} of {2}',
                                emptyMsg: "No Data Display"
                            });                            
                            this.callParent(arguments);
                        },
                        getSelected: function () {
                             var sm = this.getSelectionModel();
                             var rs = sm.getSelection();
                             if (rs.length) {
                                 return rs[0];
                             }
                             return null;
                         }                        
                    });
                    
                    Ext.define('RTDate.view.RTDateSelectedGrid',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.RTDateSelectedGrid',
                        id: 'RTDateSelectedGrid',
                        height: 250,
                        border: 2,
                        autoscroll:true,
                        collapsible: true,
                        store: 'SRTDateDetail',
                        requires: ['Ext.ux.exporter.Exporter'],
                        initComponent: function(){
                           this.title = 'Tanda Terima IN Detail';
                            this.tbar = [
                                {
                                    xtype: 'exporterbutton',
                                    text: 'Export',
                                    //format: 'excel',
                                    //title: 'Report Transaksi Tanda Terima By Date Detail'

                                }
                                /*,
                                    '->',
                                {text: 'Export Excel', action: 'exportdetail'} */
                             ];
                            this.columns= [
                                //{xtype: 'rownumberer'},
                                {header: 'No. Invoice', dataIndex: 'recdetail_invoice', width:150},
                                {header: 'No. Surat Jalan', dataIndex: 'recdetail_delivery', width:100},
                                {header: 'No. PO.', dataIndex: 'recdetail_po', width:150},
                                {header: 'Tanggal Invoice', dataIndex: 'recdetail_date', width:100, },
                                {header: 'Nominal', dataIndex: 'recdetail_price', width:100, xtype:'numbercolumn', format: '0,000,000.00'}
                            ];                              
                            this.callParent(arguments);
                        },
                        getSelected: function () {
                            var sm = this.getSelectionModel();
                            var rs = sm.getSelection();
                            if (rs.length) {
                                return rs[0];
                            }
                            return null;
                       }                        
              });
              
            Ext.define('RTDate.view.FRMTDate',{
                extend: 'Ext.form.Panel',
                title: 'Report Tanda Terima IN By Date',
                alias: 'widget.FRMTDate',
                //padding : '5',
                border : '1',
                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Tanda Terima Berdasarkan Tanggal Transaksi</p>',
                        padding: '0 5',
                        border: 0
                    },{
                         layout: 'anchor',
                        xtype: 'form',
                        //flex: 1,
			bodyStyle: {
                            border: 0,
                            padding: '5px 5px'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield', 
                            margin : '5 0',
                            items :[{    
                                        padding: '0 10 0 0',
                                        xtype:'datefield',
                                        name:'from_date',
                                        fieldLabel: 'From',
                                        editable: false,
                                        //vfield:'startDate',
                                        //vtype: 'DateRange',
                                        format:'Y-m-d',
                                        allowBlank: 'false',
                                        //endDateField: 'endDate',
                                        
                            },{    
                                        padding: '0 10 0 0',
                                        xtype:'datefield',
                                        name:'to_date',
                                        fieldLabel: 'To',
                                        editable: false,
                                        //vfield:'endDate',
                                        //vtype: 'DateRange',
                                        //minValue: Ext.Date.add(new Date(), Ext.Date.DAY, -3),
                                        //maxValue: Ext.Date.add(new Date(),Ext.Date.format,'Y-m-d'),
                                        format:'Y-m-d',
                                        allowBlank: 'false',
                                        
                            },{
                                xtype: 'button',
                                itemId: 'searchfilter',
                                text: 'Search',
                                action: 'searchfilter',
                                /*items:[{
                                        handler: function(){
                                         }
                                }]*/
                            }]           
			}] 
                    }
                ]
            });
            
            