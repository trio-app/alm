        Ext.define('Spkerja.view.FRMinputbahan',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMinputbahan',
		title: 'Insert Produk Bahan',
		width: 700,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
                position: 'center',
		modal: true,
		config: {
			recordIndex: 0,
			action: ''
		},
		items: [{
			xtype: 'form',
			layout: 'anchor',
			bodyStyle: {
                            padding: '50px',
                            border: '10'
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
                                anchor: '100%',
                                items :[{
                                    xtype: 'hidden',
                                    name: 'bahan_id',
                                    fieldLabel: 'ID'
                                },{
                                    name: 'bahan_nama',
                                    fieldLabel: 'Nama Produk',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    labelAlign: 'top',
                                    width: '75%'
                                }]
                                
                        },{
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                defaultType: 'combo',
                                margin: '5 0',
                                items: [{
                                    name: 'bahan_jenis',
                                    fieldLabel: 'Jenis Bahan',
                                    displayField: 'jbahan_nama',
                                    valueField :'jbahan_nama',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    labelAlign: 'top',
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        autoLoad:true,
                                        fields: [ 'jbahan_nama' ],
                                        proxy: {
                                            type: 'ajax',
                                            url: baseurl + 'MJbahan/cbolist',
                                            reader: {
                                                type: 'json'
                                            }
                                        }
                                    })
                                },{
                                    name: 'bahan_glasin',
                                    fieldLabel: 'Warna Glasin',
                                    displayField: 'warnaglasin_nama',
                                    valueField :'warnaglasin_nama',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        autoLoad:true,
                                        fields: [ 'warnaglasin_nama' ],
                                        proxy: {
                                            type: 'ajax',
                                            url: baseurl + 'MWarnaglasin/cbolist',
                                            reader: {
                                                type: 'json'
                                            }
                                        }
                                    })
                                },{
                                    name: 'bahan_porporasi',
                                    fieldLabel: 'PORPORASI',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['Ya', 'Tidak']
                                }]
                        },{
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                anchor: '100%',
                                margin: '5 0',
                                items: [{
                                    xtype: 'numberfield',
                                    name: 'bahan_ukuranP', 
                                    fieldLabel: 'Ukuran', 
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0', 
                                    anchor: '10%'
                               },{
                                    xtype: 'label', text: 'X', margin: '25 5 0 0'
                               },{
                                    xtype: 'numberfield',
                                    name: 'bahan_ukuranL', 
                                    fieldLabel: '',  
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '22 5 0 0', 
                                    anchor: '10%'  
                                }]
                        },{
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                position: 'center',
                                defaultType: 'combo',
                                anchor: '100%',
                                margin: '5 0',
                                items: [{
                                    name: 'bahan_warnacetakan',
                                    fieldLabel: 'Warna Cetakan',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['1 Warna', '2 Warna','3 Warna', '4 Warna', 'Polos', 'Sparasi']
                                },{
                                    name: 'bahan_qtyname',
                                    fieldLabel: 'Qty Name',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['ROLL', 'BOX','Lembar']
                                },{
                                    name: 'bahan_totalname',
                                    fieldLabel: 'Total Name',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['ROLL', 'BOX','Lembar']
                                }]
                        },{
                                xtype: 'fieldcontainer',
                                layout: 'hbox',
                                defaultType: 'combo',
                                anchor: '100%',
                                margin: '5 0',
                                items: [{
                                    name: 'bahan_core',
                                    fieldLabel: 'Core',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['1"', '1,5"', '3"', 'Lembar']
                                },{
                                    name: 'bahan_arahgulungan',
                                    fieldLabel: 'Arah Gulungan',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['INSIDE', 'OUTSIDE']
                                },{
                                    name: 'bahan_sensor',
                                    fieldLabel: 'Sensor',
                                    allowBlank: false,
                                    labelAlign: 'top',
                                    margin: '5 5 0 0',
                                    store: ['Gap (3mm)', 'Black Mark', 'Coak']
                                }]
                        }
                              
                         ]
                      }],
		buttons: [{
			text: 'Save',
			action: 'add_newbahan'
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
        
