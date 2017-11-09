Ext.define('RByDate.view.VRByDate',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.RByDateGrid',
    title: 'Packinglist',
    border: 2,
    store: 'SRByDate',
    //frame:true,
    height: 250,
    requires: ['Ext.ux.exporter.Exporter'],
    /*layout: [{
       type: 'vbox'     
    }],
    */
            initComponent: function () {
                         this.tbar = [
                                   //
                                   {
                                        xtype: 'exporterbutton',
                                        text: 'Export',
                                        //format: 'excel',
                                        //title: 'Report Transaksi By Date'
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
                                {xtype: 'rownumberer'},
                                {header: 'Customer', dataIndex: 'customer_nama', width:150},
                                {header: 'Date', dataIndex: 'transaksi_date', width:120},
                                {header: 'Document No.', dataIndex: 'transaksi_doc', width:150},
                                {header: 'Amount', dataIndex:'Amount',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
                                                  
                            ];    
                            this.bbar = Ext.create('Ext.PagingToolbar', {
                                store: 'SRByDate',
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
                    
                    Ext.define('RByDate.view.RByDateSelectedGrid',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.RByDateSelectedGrid',
                        id: 'RByDateSelectedGrid',
                        height: 250,
                        border: 2,
                        autoscroll:true,
                        collapsible: true,
                        store: 'SRByDateDetail',
                        requires: ['Ext.ux.exporter.Exporter'],
                        initComponent: function(){
                           this.title = 'Packinglist Detail';
                            this.tbar = [
                                //'->',
                                {
                                    xtype: 'exporterbutton',
                                    text: 'Export',
                                    //format: 'excel',
                                    //title: 'Report Transaksi'

                                }
                                /*,
                                    
                                {text: 'Export Excel', action: 'exportdetail'} */
                             ];
                            this.columns= [
                                //{xtype: 'rownumberer'},
                                {header: 'No. SJ', dataIndex: 'trdetail_sjap', width:150},
                                {header: 'Item', dataIndex: 'item_nama', width:100},
                                {header: 'PO.', dataIndex: 'trdetail_po', width:150},
                                {header: 'Date', dataIndex: 'trdetail_date', width:100, },
                                {header: 'QTY', dataIndex: 'trdetail_qty', width:100},
                                {header: 'Unit', dataIndex: 'trdetail_unit', width:100},
                                {header: 'Price', dataIndex: 'trdetail_price', width:100},
                                {header: 'Amount', dataIndex: 'trdetail_amount', width:100, xtype:'numbercolumn', format: '0,000,000.00'},
                                {header: 'Berat Satuan (KG)', dataIndex: 'trdetail_weight', width:100},
                                {header: 'Total Weight(KG)', dataIndex: 'trdetail_weight', width:100},
                                //{header: 'UPP', dataIndex: '', width:100},
                                {header: 'Total Pack', dataIndex: 'trdetail_pack', width:100},
                                
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
              
            Ext.define('RByDate.view.FRMByDate',{
                extend: 'Ext.form.Panel',
                title: 'Report Packinglist By Date',
                alias: 'widget.FRMByDate',
                //padding : '5',
                border : '1',
                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Packinglist Berdasarkan Tanggal Transaksi</p>',
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
            
            Ext.apply(Ext.form.field.VTypes, {
                DateRange: function(val, field) {
                    var date = field.parseDate(val);

                    if (!date) {
                        return false;
                    }
                    if (field.startDateField && (!field.dateRangeMax || (date.getTime() != field.dateRangeMax.getTime()))) {
                        var start = field.up(field.ownerCt.xtype).down('datefield[vfield=startDate]');
                        start.setMaxValue(date);
                        start.validate();
                        field.dateRangeMax = date;
                    }
                    else if (field.endDateField && (!field.dateRangeMin || (date.getTime() != field.dateRangeMin.getTime()))) {
                        var end = field.up(field.ownerCt.xtype).down('datefield[vfield=endDate]');
                        end.setMinValue(date);
                        end.validate();
                        field.dateRangeMin = date;
                    }
                    /*
                     * Always return true since we're only using this vtype to set the
                     * min/max allowed values (these are tested for after the vtype test)
                     */
                    return true;
                },
                DateRangeText: 'From date must be before To date'
            });