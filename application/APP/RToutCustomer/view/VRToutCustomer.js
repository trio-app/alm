  Ext.define('RToutCustomer.view.VRToutCustomer', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RToutCustomerGrid',
    //title: 'Report Transaksi By Customer',
    store: 'SRToutCustomer',
    autoScroll: true,
    //frame:true,
    height: 250,
    requires: ['Ext.ux.exporter.Exporter'],
    initComponent: function () {
      this.title = 'Tanda Terima Out';
      this.tbar = [
                //'->',
                {
                    xtype: 'exporterbutton',
                    text: 'Export',
                    //format: 'excel',
                    //title: 'Report Transaksi Tanda Terima By Customer'
                },
          
      ];
      this.columns = [
        { xtype:'rownumberer'},  
        { header: 'Customer',dataIndex:'customer_nama', width:150},
        { header: 'Date',dataIndex:'receiptout_date', width:100},
        { header: 'Document No.',dataIndex:'receiptout_doc',width:150},
        { header: 'Nominal', dataIndex: 'Price',width:150, xtype:'numbercolumn', format: '0,000,000.00'}
      ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'SRToutCustomer',
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
  
  Ext.define('RToutCustomer.view.VRToutCustomerDetail',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.RToutCustomerSelectedGrid',
                        id: 'RToutCustomerSelectedGrid',
                        height: 250,
                        store: 'SRToutCustomerDetail',
                        requires: ['Ext.ux.exporter.Exporter'],
                        initComponent: function(){
                            this.title = 'Tanda Terima Out Detail';
                            this.tbar = [
                                {
                                    xtype: 'exporterbutton',
                                    text: 'Export',
                                    //format: 'excel',
                                    //title: 'Report Transaksi Tanda Terima Detail Customer'

                                },
                                    '->',
                                //{text: 'Export Excel', action: 'exportdetail'}  
                             ];
                            this.columns= [
                                //{xtype: 'rownumberer'},
                                {header: 'No. Invoice', dataIndex: 'recdetailout_invoice', width:100},
                                {header: 'No. Surat Jalan', dataIndex: 'recdetailout_delivery', width:150},
                                {header: 'No. PO.', dataIndex: 'recdetailout_po', width:250},
                                {header: 'Tanggal Invoice', dataIndex: 'recdetailout_date', width:100},
                                {header: 'Nominal', dataIndex: 'recdetailout_price', width:100, xtype:'numbercolumn', format: '0,000,000.00'}
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
                    
                 Ext.define('RToutCustomer.view.FRToutCustomer',{
                extend: 'Ext.form.Panel',
                title: 'Report Tanda Terima Out By Customer',
                alias: 'widget.FRToutCustomer',
                //padding : '5',

                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Tanda Terima Out Berdasarkan Transaksi Customer</p>',
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
                            //margin : '5 0',
                            items :[{      
                                width: 420,
                                labelWidth: 100,
                                xtype: 'combo',
                                padding: '0 10 0 0',
                                fieldLabel: 'Pilih Customer',
                                name:'customer_nama',
                                allowBlank: false,
                                displayField: 'customer_nama',
                                valueField :'customer_nama',
                                queryMode:'local',
                                store: Ext.create('Ext.data.ArrayStore', {
                                    autoLoad:true,
                                    fields: [ 'customer_nama' ],
                                    proxy: {
                                        type: 'ajax',
                                        url: baseurl + 'MCustomer/cbolist',
                                        reader: {
                                            type: 'json'
                                        }
                                    }
                                })
                            },{
                                xtype: 'button',
                                itemId: 'searchfilter',
                                text: 'Search',
                                action: 'searchfilter'
                            }]           
			}]                                                   
                    }
                ]   
            });
  
                      
    
