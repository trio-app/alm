
Ext.define('Spkerja.view.FRMinputcustomer',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMinputcustomer',
		title: 'Insert New Customer',
		width: 700,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
		modal: true,
		config: {
			recordIndex: 0,
			action: ''
		},
		items: 
                        [{
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
			items: [
                            {
                            readOnly: true,
                            xtype: 'hidden',
                            name: 'customer_id',
                            fieldLabel: 'ID'
			},{
                            name: 'customer_nama',
                            flex: 1,
                            fieldLabel: 'Nama Perusahaan',
                            allowBlank: false
			},{
                           name: 'customer_alamat',
                            flex: 1,
                            fieldLabel: 'Alamat',
                            allowBlank: false
                        },{
                            name: 'customer_telp',
                            flex: 1,
                            fieldLabel: 'No. Telp'
			},{
                            name: 'customer_cp',
                            flex: 1,
                            fieldLabel: 'Contact Person',
                            allowBlank: false
			},{
                            name: 'customer_email',
                            vtype:'email',
                            allowBlank: false,
                            fieldLabel: 'Email'
			}            
       
                    ]
		}],
		buttons: [{
			text: 'Save',
			action: 'add_newcustomer'
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