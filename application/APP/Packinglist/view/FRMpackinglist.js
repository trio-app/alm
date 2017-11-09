Ext.define('SelectedModelPacking', {
    extend : 'Ext.data.Model',
    fields: [
        'trdetailitem_id',
        'trdetail_doc',
        'trdetail_sjap', 
        'trdetail_item', 
        'trdetail_po', 
        {name : 'trdetail_date', type : Ext.data.Types.DATE},
        'trdetail_qty', 
        'trdetail_unit', 
        {name : 'trdetail_price', type: 'float' }, 
        {name : 'trdetail_amount', type: 'float',
            convert: function(val,row) {
                return row.data.trdetail_qty * row.data.trdetail_price;
            }         
        }, 
        {name : 'trdetail_weight', type: 'float' },        
        {name : 'trdetail_weighttotal', type: 'float',     
            convert: function(val,row) {
                return row.data.trdetail_qty * row.data.trdetail_weight;
            }               
        }, 
        {name : 'trdetail_upp', type: 'float' }, 
        {name : 'trdetail_pack', type: 'float',  
            convert: function(val,row) {
                return Math.ceil(row.data.trdetail_qty / row.data.trdetail_upp);
            }            
        }]
});

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false,
        listeners: {
            edit: function(editor, e){
                e.record.commit();
                var records = Ext.getStore('SelectedStorePacking').getRange();
                console.log(records);
            }
        }
    });

    var SelectedStorePacking = Ext.create('Ext.data.ArrayStore', {
        id: 'SelectedStorePacking',
        autoLoad: 'true',
        data: [],
        model: 'SelectedModelPacking',
        proxy: {
            type: 'memory'
        }
    });

var table = Ext.define('Pakinglist.view.Vselected_ItemPacking',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.Wselected_ItemPacking',
    store: SelectedStorePacking,
    id: 'selectedGridPacking',
    height: 200,
    queryMode: 'local',
    plugins: [rowEditing],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                SelectedStorePacking.remove(selection);
                //delete records
            }  
        }
        
    }},    
    initComponent: function () {
        this.tbar = [
        {
            text: '<b>Tambah Item</b>', action: 'add_item',
            icon: baseurl + 'system/images/icons/drop-add.gif'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'NO SJ', dataIndex: 'trdetail_sjap',
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },    
            { header: 'Item', dataIndex: 'trdetail_item'},    
            { header: 'PO.', dataIndex: 'trdetail_po',
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },    
            { header: 'Date', dataIndex: 'trdetail_date', xtype:'datecolumn',  
                renderer:Ext.util.Format.dateRenderer('Y-m-d'),
                editor: {
                    xtype: 'datefield',
                    format: 'Y-m-d',
                }

            },    
            { header: 'Qty', dataIndex: 'trdetail_qty', xtype: 'numbercolumn',
                editor: {
                    // defaults to textfield if no xtype is supplied
                    xtype: 'numberfield',                    
                    allowBlank: false
                }
            },     
            { header: 'Unit', dataIndex: 'trdetail_unit' },     
            { header: 'Price', dataIndex: 'trdetail_price', xtype: 'numbercolumn' },     
            { header: 'Amount', dataIndex: 'trdetail_amount', xtype: 'numbercolumn',
                editor: {
                    // defaults to textfield if no xtype is supplied
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },    
            { header: 'Berat Satuan (KG)', dataIndex: 'trdetail_weight', xtype: 'numbercolumn', format: '0.0000'},    
            { header: 'Total Weight (KG)', dataIndex: 'trdetail_weighttotal', xtype: 'numbercolumn',
                editor: {
                    // defaults to textfield if no xtype is supplied
                    xtype: 'numberfield',                    
                    allowBlank: false
                } , 
            },      
            { header: 'UPP', dataIndex: 'trdetail_upp', xtype: 'numbercolumn'},    
            { header: 'Total Pack', dataIndex: 'trdetail_pack', xtype: 'numbercolumn' ,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    xtype: 'numberfield',                    
                    allowBlank: false
                }            
            },     
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

        Ext.define('Packinglist.view.FRMpackinglist',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMpackinglist',
		title: 'Insert Transaction',
		width: 1200,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
		modal: true,
		config: {
			recordIndex: 0,
			action: ''
		},
		items: [{
			xtype: 'form',
			layout: 'anchor',
			bodyStyle: {
                            padding: '20px',
                            border: '0'
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
                                labelAlign:'top',
                                readOnly: true,
                                name: 'transaksi_doc',
                                id: 'transaksi_doc',
                                flex: 1,
                                fieldLabel: 'No. Document',
                                allowBlank: false,
                                margin: '5 5 0 0',
                            },{
                                labelAlign:'top',
                                xtype: 'datefield',
                                name: 'transaksi_date',
                                editable: true,
                                readOnly: false,
                                flex: 1,
                                format: 'Y-m-d',
                                fieldLabel: 'Document Date',
                                allowBlank: false,
                                margin: '5 5 0 0',
                            },{
                                labelAlign:'top',
                                name: 'transaksi_supplier',
                                readOnly: true,
                                flex: 1,
                                value: 'ALMINDO PRATAMA.CV',
                                fieldLabel: 'Supplier',
                                allowBlank: false,
                                margin: '5 0 0 0',
                            }]
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield', 
                            margin : '5 0',
                            items :[{
                                readOnly: true,
                                xtype: 'hidden',
                                name: 'customer_id',
                                flex: 1,
                                emptyText: 'ID',
                                allowBlank: false,
                            },{
                                readOnly: true,
                                fieldLabel: 'Pilih Customer',
                                name: 'customer_nama',
                                flex: 2,
                                emptyText: 'Nama Customer',
                                allowBlank: false,
                                margin : '0 5 0 0',
                            },{
                                readOnly: true,
                                name: 'customer_cp',
                                flex: 2,
                                emptyText: 'Contact Person',
                                allowBlank: false,
                            },{
                                readOnly: true,
                                name: 'customer_telp',
                                flex: 2,
                                emptyText: 'No. Telp',
                                allowBlank: false,
                                margin : '0 0 0 5',
                            }]
                        },{
                            xtype: 'container',
                            layout: 'hbox',
                            defaultType: 'textfield', 
                            margin : '5 0',
                            items :[{
                                fieldLabel: ' ',
                                readOnly: true,
                                name: 'customer_email',
                                flex: 1,
                                emptyText: 'Email',
                                allowBlank: false,
                                margin : '0 5 0 0',
                            },{
                                readOnly: true,
                                name: 'customer_alamat',
                                flex: 2,
                                emptyText: 'Alamat',
                                allowBlank: false,
                            },{
                                    xtype: 'button',
                                    id: 'select_cust',
                                    action: 'select_cust',
                                    icon: baseurl + 'system/images/icons/user_add.gif',
                                    text: 'Pilih Customer',
                                    margin: '0 0 0 5',
                                            listeners: {
                                                click: function() {
                                                    //Ext.getCmp('contact_provinsi').store.reload();
                                                }
                                            }                                
                            }]
                        },
                        table
                    ]
		}],
		buttons: [{
			text: 'Save',
			action: 'add'
		},{
                        text    : 'Reset',
                        handler : function () { 
                        this.up('window').down('form').getForm().reset();  
                }
                },{
                        text   : 'Cancel',
                        handler: function () { 
                        this.up('window').close();
                    }
                }
                ]

	});
        
        
var table = Ext.define('Packinglist.view.vselectcust',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.WCustomer',
    store: 'Scustomer',  
    initComponent: function () {
        this.tbar = [
            '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Customer', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Alamat', dataIndex: 'customer_alamat', flex: 1 },      
            { header: 'No. Telp', dataIndex: 'customer_telp', flex: 1 },      
            { header: 'Email', dataIndex: 'customer_email', flex: 1 },      
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Scustomer',
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

        Ext.define('Packinglist.view.vcustomer',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMcustomer',
		title: 'Select Customer',
		width: 700,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
		modal: true,
		config: {
			recordIndex: 0,
			action: ''
		},
		items: [{
			xtype: 'form',
			layout: 'anchor',
			bodyStyle: {
                            border: '0'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [table]
		}],
		buttons: [{
                        text   : 'Cancel',
                        handler: function () { 
                        this.up('window').close();
                }
                }]

	});

var table2 = Ext.define('Packinglist.view.vselectitem',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.WItem',
    store: 'Sitem',  
    initComponent: function () {
        this.tbar = [
            '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Kode Item', dataIndex: 'item_kode'},    
            { header: 'Nama Item', dataIndex: 'item_nama', flex: 1 },    
            { header: 'Category Item', dataIndex: 'item_category'},    
            { header: 'Unit Item', dataIndex: 'item_unit'},    
            { header: 'Harga Item', dataIndex: 'item_harga', xtype: 'numbercolumn' },    
            { header: 'UPP', dataIndex: 'item_upp', xtype: 'numbercolumn' },    
            { header: 'Berat Satuan (KG)', dataIndex: 'item_weight', xtype: 'numbercolumn', format: '0.0000' },    
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Sitem',
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

        Ext.define('Packinglist.view.vitem',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMItem',
		title: 'Select Item',
		width: 700,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
		modal: true,
		config: {
			recordIndex: 0,
			action: ''
		},
		items: [{
			xtype: 'form',
			layout: 'anchor',
			bodyStyle: {
                            border: '0'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [table2]
		}],
		buttons: [{
                        text   : 'Cancel',
                        handler: function () { 
                        this.up('window').close();
                }
                }]

	});