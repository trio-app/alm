	Ext.define('MCategory.view.FRMmcategory',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMmcategory',
		title: 'Insert New Category',
		//width: 700,
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
                            name: 'category_id',
                            fieldLabel: 'ID'
			},{
                            name: 'category_nama',
                            flex: 1,
                            fieldLabel: 'Item Category',
                            allowBlank: false
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