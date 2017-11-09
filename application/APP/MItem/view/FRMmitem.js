	Ext.define('MItem.view.FRMmitem',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMmitem',
		title: 'Insert New Category',
                id : 'FORM',
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
                            padding: '20px',
                            border: '0'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [{
                            readOnly: true,
                            xtype: 'hidden',
                            name: 'item_id',
                            fieldLabel: 'ID'
			},{
                            name: 'item_kode',
                            flex: 1,
                            fieldLabel: 'Item Kode',
                            allowBlank: false
			},{
                            name: 'item_nama',
                            flex: 1,
                            fieldLabel: 'Item Nama',
                            allowBlank: false
			},{
                            xtype: 'combo',
                            fieldLabel: 'Item Category',
                            id: 'CATEGORY',
                            name:'item_category',
                            displayField: 'category_nama',
                            valueField :'category_nama',
                            allowBlank: false,
                            queryMode:'local',
                            editable: false,
                            store: Ext.create('Ext.data.ArrayStore', {
                            autoLoad:true,
                            reload:true,
                            fields: [ 'category_nama'],
                            proxy: {
                                type: 'ajax',
                                url: baseurl + 'MCategory/cbolist',
                                reader: {
                                    type: 'json'
                                }
                            }
                        })//,
                       // labelAlign:'top'

                        },{
                            xtype: 'combo',
                            fieldLabel: 'Item Unit',
                            id: 'UNIT',
                            name:'item_unit',
                            displayField: 'unit_nama',
                            valueField :'unit_nama',
                            allowBlank: false,
                            queryMode:'local',
                            editable: false,
                            store: Ext.create('Ext.data.ArrayStore', {
                            autoLoad:true,
                            fields: [ 'unit_nama'],
                            proxy: {
                                type: 'ajax',
                                url: baseurl + 'MUnit/cbolist',
                                reader: {
                                    type: 'json'
                                }
                            }
                        })//,
                       // labelAlign:'top'

                        },{
                            xtype: 'numberfield',
                            name: 'item_harga',
                            flex: 1,
                            fieldLabel: 'Item Price',
                            allowBlank: false,
                            minValue: 0,
                            
			},{
                            xtype: 'numberfield',
                            name: 'item_upp',
                            flex: 1,
                            fieldLabel: 'Item UPP',
                            allowBlank: false,
                            minValue: 0,
			},{
                            xtype: 'numberfield',
                            name: 'item_weight',
                            flex: 1,
                            fieldLabel: 'Item Weight',
                            decimalPrecision:5,
                            allowBlank: false,
                            minValue: 0,
			}        
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
                }]

	});