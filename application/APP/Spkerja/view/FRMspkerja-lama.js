
        
        Ext.define('Spkerja.view.FRMspkerja',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMspkerja',
		title: 'Insert Surat Perintah Kerja',
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
                                    name: 'spk_doc',
                                    id: 'spk_doc',
                                    fieldLabel: 'No. Document',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                },{
                                    labelAlign:'top',
                                    name: 'spk_date',
                                    readOnly: true,
                                    value: Ext.Date.format(new Date(), 'Y-m-d'),
                                    fieldLabel: 'Document Date',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1
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
                                    flex: 2
                                },{
                                    name: 'customer_nama',
                                    fieldLabel: 'Customer',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
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

                            },{
                                xtype: 'container',
                                layout: 'form',
                                border:true,
                                defaultType: 'textfield', 
                                margin : '5 0',
                                items :[{
                                    xtype: 'hidden',
                                    name: 'bahan_id',
                                    fieldLabel: 'ID',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2
                                },{
                                    xtype: 'button',
                                    id: 'select_bahan',
                                    action: 'select_bahan',
                                    icon: baseurl + 'system/images/icons/application_view_list.png',
                                    text: 'Pilih Bahan',
                                    flex: 1,
                                    margin: '5 5 0 0',
                                            listeners: {
                                                click: function() {
                                                    //Ext.getCmp('contact_provinsi').store.reload();
                                                }
                                            }                                
                            }]

                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield', 
                                margin : '5 0',
                                anchor: '100%',
                                items :[{
                                    id: 'bahan_jenis',
                                    name: 'spk_jenisbahan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Jenis Bahan',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                    
                                },{
                                    id: 'bahan_glasin',
                                    name: 'spk_glasin',
                                    labelAlign: 'top',
                                    fieldLabel: 'Warna Glasin',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                }]

                            },{
                                id : 'bahan_ukuranP', name: 'spk_ukuranP', fieldLabel: 'Ukuran Panjang', labelAlign: 'top', allowBlank: false, 
                                            margin: '5 5 0 0', anchor: '20%', readOnly: true  
                            },{
                                id : 'bahan_ukuranL', name: 'spk_ukuranL', fieldLabel: 'Ukuran Lebar', labelAlign: 'top', allowBlank: false,
                                            margin: '5 5 0 0', anchor: '20%',readOnly: true
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: 'bahan_porporasi',
                                    name: 'spk_porporasi',
                                    labelAlign: 'top',
                                    fieldLabel: 'Porporasi',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: 'bahan_mataperbaris',
                                    name: 'spk_mataperbaris',
                                    labelAlign: 'top',
                                    fieldLabel: 'Jml. Mata Perbaris',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                    
                                },{
                                    id: 'bahan_warnacetakan',
                                    name: 'spk_warnacetakan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Warna Cetakan',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    xtype: 'image',
                                    id: '',
                                    width: '320',
                                    height: '240',
                                    style:{
                                        'display': 'block',
                                        'margin': 'auto'
                                    }
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: 'bahan_qtyname',
                                    name: 'spk_qtyname',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty Name',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: 'bahan_totalname',
                                    name: 'spk_totalname',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total Qty Name',
                                    allowBlank: false,
                                    margin: '5 5 0 250',
                                    width: '20%',
                                    readOnly: true
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'numberfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    name: 'spk_qtyorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty Order',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%'
                                },{
                                    name: 'spk_upporder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty UPP',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%'
                                },{
                                    name: 'spk_totalorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    //readOnly: true,
                               /*     convert: function(val,row) {
                                        return row.data.spkdetail_qtyorder / row.data.spkdetail_upporder;
                             } */
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: 'bahan_core',
                                    name: 'spk_core',
                                    labelAlign: 'top',
                                    fieldLabel: 'Core',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: 'bahan_arahgulungan',
                                    name: 'spk_arahgulungan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Arah Gulungan',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: 'bahan_sensor',
                                    name: 'spk_sensor',
                                    labelAlign: 'top',
                                    fieldLabel: 'Sensor',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                }]
                            },{
                                xtype: 'label',
				margin:'0 0 0 250',
                                text: 'BAHAN BAKU YANG DIGUNAKAN',
                                style: 'font-weight:bold;'
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    name: 'bahan_jenis',
                                    labelAlign: 'top',
                                    fieldLabel: 'Jenis Bahan',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: '',
                                    name: '',
                                    labelAlign: 'top',
                                    fieldLabel: 'Ukuran',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: '',
                                    name: '',
                                    labelAlign: 'top',
                                    fieldLabel: '',
                                    allowBlank: 'false',
                                    margin: '22 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: '',
                                    name: '',
                                    fieldLabel: 'Jumlah Roll',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '40%',
                                    readOnly: true
                                },]
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
                    }
                    ]

	});
        
