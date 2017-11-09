  Ext.define('RSPKerja.view.VRSPKerja', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.RSPKerjaGrid',
    //title: 'Report Transaksi By Customer',
    store: 'SRSPKerja',
    autoScroll: true,
    //frame:true,
    height: 250,
    requires: ['Ext.ux.exporter.Exporter'],
    initComponent: function () {
      this.title = 'Report Surat Perintah Kerja (SPK)';
      this.tbar = [
          //'->',
                {
                    xtype: 'exporterbutton',
                    text: 'Export'
                    //format: 'excel',
                    //title: 'Report Transaksi By Customer'
                },
          
      ];
      this.columns = [
        { xtype:'rownumberer'},  
        { header: 'No. SPK',dataIndex:'customer_nama',width:150},
        { header: 'Date',dataIndex:'transaksi_date',width:120},
        { header: 'Jenis Bahan',dataIndex:'transaksi_doc',width:150},
        { header: 'Ukuran',dataIndex:'transaksi_doc',width:150},
        { header: 'Total Bahan',dataIndex:'transaksi_doc',width:150},
        { header: 'Amount',dataIndex:'Amount',width:150, xtype:'numbercolumn', format: '0,000,000.00'},
      ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'SRSPKerja',
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
  
  Ext.define('RSPKerja.view.VRSPKerjaDetail',{
                        extend: 'Ext.grid.Panel',
                        alias: 'widget.RSPKerjaSelectedGrid',
                        id: 'RSPKerjaSelectedGrid',
                        height: 250,
                        store: 'SRSPKerjaDetail',
                        requires: ['Ext.ux.exporter.Exporter'],
                        initComponent: function(){
                            this.title = '-';
                            this.tbar = [
                                //'->',
                                {
                                    xtype: 'exporterbutton',
                                    text: 'Export',
                                    //format: 'excel',
                                    //title: 'Report Transaksi Detail Customer'

                                },
                                //{text: 'Export Excel', action: 'exportdetail'}  
                             ];
                            this.columns= [
                                //{xtype: 'rownumberer'},
                                {header: 'No. SJ', dataIndex: 'trdetail_sjap', width:100},
                                {header: 'Item', dataIndex: 'item_nama', width:150},
                                {header: 'PO.', dataIndex: 'trdetail_po', width:250},
                                {header: 'Date', dataIndex: 'trdetail_date', width:100},
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
                    
                 Ext.define('RSPKerja.view.FRSPKerja',{
                extend: 'Ext.form.Panel',
                title: 'Report Packinglist By Customer',
                alias: 'widget.FRSPKerja',
                //padding : '5',

                layout: {
                        type: 'vbox',
                        align: 'stretch'
                },
                padding: '0 0 10px',
                items: [{
                        html: '<p>Report Packinglist Berdasarkan Transaksi Customer</p>',
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
                                /*store: Ext.create('Ext.data.ArrayStore', {
                                    autoLoad:true,
                                    fields: [ 'customer_nama' ],
                                    proxy: {
                                        type: 'ajax',
                                        url: baseurl + 'MCustomer/cbolist',
                                        reader: {
                                            type: 'json'
                                        }
                                    }
                                }) */
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
  
                      
    
