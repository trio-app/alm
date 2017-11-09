Ext.define('SelectedModelTanda', {
    extend : 'Ext.data.Model',
    fields: [
        'recdetail_doc',
        'recdetail_invoice',
        'recdetail_delivery', 
        'recdetail_po', 
        'recdetail_date',
        {name : 'recdetail_price', type: 'float' },        ]
});

    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
        clicksToMoveEditor: 1,
        autoCancel: false,
        listeners: {
            edit: function(editor, e){
                e.record.commit();
                var records = Ext.getStore('SelectedStoreTanda').getRange();
                //console.log(e);
                console.log(records);
            }
        }
    });

    var SelectedStoreTanda = Ext.create('Ext.data.ArrayStore', {
        id: 'SelectedStoreTanda',
        autoLoad: 'true',
        data: [],
        model: 'SelectedModelTanda',
        proxy: {
            type: 'memory'
        }
    });

var table = Ext.define('Tandaterima.view.Vselected_ItemTanda',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.Wselected_ItemTanda',
    store: SelectedStoreTanda,
    id: 'selectedGridTanda',
    height: 300,
    queryMode: 'local',
    plugins: [rowEditing],
    viewConfig : {
        listeners : {
        'itemkeydown' : function(view, record, item, index, key) {
            if (key.getKey() == 46) {//the delete button
                var selection = this.getSelectionModel().getSelection();
                SelectedStoreTanda.remove(selection);
                //delete records
            }  
        }
        
    }},    
    initComponent: function () {
        this.tbar = [
        {
            text: '<b>Tambah Invoice</b>', action: 'add_item',
            icon: baseurl + 'system/images/icons/drop-add.gif'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'NO Invoice', dataIndex: 'recdetail_invoice', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }
            },    
            { header: 'No. Surat Jalan', dataIndex: 'recdetail_delivery', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },    
            { header: 'PO.', dataIndex: 'recdetail_po', flex: 1,
                editor: {
                    // defaults to textfield if no xtype is supplied
                    allowBlank: false
                }            
            },    
            { header: 'Tgl Invoice', dataIndex: 'recdetail_date',  flex: 1,
                //renderer:Ext.util.Format.dateRenderer('Y-m-d H:i:s T'),
                editor: {                  
                    allowBlank: false
                    //dateFormat: 'Y-m-d' 
                }

            },    
            { header: 'Nominal', dataIndex: 'recdetail_price', xtype: 'numbercolumn', flex: 1,
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

        Ext.define('Tandaterima.view.FRMtandaterima',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMtandaterima',
		title: 'Insert Transaction',
		width: 800,
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
                        items:[{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield', 
                                margin : '5 0',
                                items :[{
                                    labelAlign:'top',
                                    readOnly: true,
                                    name: 'receipt_doc',
                                    id: 'receipt_doc',
                                    fieldLabel: 'No. Document',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                },{
                                    xtype: 'datefield',
                                    labelAlign:'top',
                                    name: 'receipt_date',
                                    editable: true,
                                    readOnly: false,
                                    format: 'Y-m-d',
                                    fieldLabel: 'Document Date',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                },{
                                    readOnly: true,
                                    labelAlign:'top',
                                    name: 'receipt_from',
                                    id: 'receipt_from',
                                    value: 'CV. ALMINDO PRATAMA',
                                    fieldLabel: 'Tujuan',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                }]

                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield', 
                                margin : '5 0',
                                items :[{
                                    xtype: 'hidden',
                                    name: 'customer_id',
                                    fieldLabel: 'ID',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                },{
                                    name: 'customer_nama',
                                    fieldLabel: 'Dari',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                },{
                                    xtype: 'button',
                                    id: 'select_cust1',
                                    action: 'select_cust1',
                                    icon: baseurl + 'system/images/icons/user_add.gif',
                                    text: 'Pilih Customer',
                                    flex: 1,
                                    margin: '5 5 0 0',
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
        
