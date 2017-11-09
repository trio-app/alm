	Ext.define('MJbahan.view.FRMmjbahan',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMmjbahan',
		//title: 'Insert New Jenis Bahan',
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
                            name: 'jbahan_id',
                            fieldLabel: 'ID'
			},{
                            name: 'jbahan_nama',
                            flex: 1,
                            fieldLabel: 'Jenis Bahan',
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