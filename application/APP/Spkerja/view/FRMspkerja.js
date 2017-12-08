
        
        Ext.define('Spkerja.view.FRMspkerja',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMspkerja',
		title: 'Insert Surat Perintah Kerja',
		width: 800,
                //height: 625,
		layout: 'fit',
		resizable: false,
                autoScroll: true,
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
                            padding: '5px',
                            border: '0',
                            background: 'none'
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
                                    labelAlign:'top',
                                    readOnly: true,
                                    name: 'spk_doc',
                                    id: 'spk_doc',
                                    fieldLabel: 'No. Document',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 2
                                },{
                                    labelAlign:'top',
                                    name: 'spk_date',
                                    readOnly: true,
                                    value: Ext.Date.format(new Date(), 'Y-m-d'),
                                    fieldLabel: 'Document Date',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 2
                                },{
                                    xtype: 'hidden',
                                    name: 'customer_id',
                                    fieldLabel: 'ID',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 2
                                },{
                                    name: 'customer_nama',
                                    fieldLabel: 'Customer',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    labelAlign: 'top',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 1,
                                    readOnly: true
                                },{
                                    xtype: 'button',
                                    id: 'select_cust1',
                                    action: 'select_cust1',
                                    icon: baseurl + 'system/images/icons/user_add.gif',
                                    text: 'Pilih Customer',
                                    flex: 1,
                                    margin: '15 5 0 0',
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
                                items :[{
                                    labelAlign:'top',
                                    readOnly: false,
                                    name: 'spk_nopo',
                                    //id: 'spk_doc',
                                    fieldLabel: 'No. PO',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 2
                                },{
                                    xtype: 'datefield',
                                    labelAlign:'top',
                                    name: 'spk_delivery',
                                    editable: true,
                                    readOnly: false,
                                    format: 'Y-m-d',
                                    fieldLabel: 'Delivery Date',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    flex: 2
                                },{
                                    xtype: 'hidden',
                                    name: 'bahan_id',
                                    fieldLabel: 'ID',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2
                                },{
                                    id:'bahan_nama',
                                    name: 'spk_bahannama',
                                    fieldLabel: 'Nama Produk',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    labelAlign: 'top',
                                    allowBlank: false,
                                    margin: '0 5 0 0',
                                    width: '50%',
                                    flex: 1,
                                    readOnly: true
                                    
                                },{
                                    xtype: 'button',
                                    id: 'select_bahan',
                                    action: 'select_bahan',
                                    icon: baseurl + 'system/images/icons/application_view_list.png',
                                    text: 'Pilih Produk',
                                    flex: 1,
                                    margin: '15 5 0 0',
                                            listeners: {
                                                click: function() {
                                                    //Ext.getCmp('contact_provinsi').store.reload();
                                                }
                                            }                                
                            }]

                            },{
                                xtype: 'container',
                                layout: 'hbox', 
                                margin : '5 0',
                                anchor: '100%',
                                items :[{
                                    xtype: 'hidden',
                                    name: 'spk_id',
                                    labelAlign: 'top',
                                    fieldLabel: 'ID',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                    
                                },{
                                    xtype: 'textfield',
                                    id: 'bahan_jenis',
                                    name: 'spk_jenisbahan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Jenis Bahan',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                    
                                },{
                                    xtype: 'textfield',
                                    id: 'bahan_merk',
                                    name: 'spk_merk',
                                    labelAlign: 'top',
                                    fieldLabel: 'Merk Bahan',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    xtype: 'textfield',
                                    id: 'bahan_glasin',
                                    name: 'spk_glasin',
                                    labelAlign: 'top',
                                    fieldLabel: 'Warna Glasin',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    xtype: 'textfield',
                                    id: 'bahan_bentuk',
                                    name: 'spk_bentuk',
                                    labelAlign: 'top',
                                    fieldLabel: 'Bentuk Label',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    xtype: 'textfield',
                                    id: 'bahan_porporasi',
                                    name: 'spk_porporasi',
                                    labelAlign: 'top',
                                    fieldLabel: 'Porporasi',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                    readOnly: true
                                }]

                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    id: 'bahan_warnacetakan',
                                    name: 'spk_warnacetakan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Warna Cetakan',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    id: 'bahan_arahgulungan',
                                    name: 'spk_arahgulungan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Arah Gulungan',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    id: 'bahan_sensor',
                                    name: 'spk_sensor',
                                    labelAlign: 'top',
                                    fieldLabel: 'Sensor',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                },{
                                    id: 'bahan_core',
                                    name: 'spk_core',
                                    labelAlign: 'top',
                                    fieldLabel: 'Core',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: true
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield', 
                                margin : '5 0',
                                anchor: '100%',
                                defaults: {
                                    xtype: 'numberfield',
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var bahanP = Ext.getCmp('bahan_ukuranP').getValue();
                                            var bahanL = Ext.getCmp('bahan_ukuranL').getValue();
                                            var matapisau = Ext.getCmp('spk_matapisau').getValue();
                                            var order = Ext.getCmp('spk_order').getValue();
                                            var digunakan_total = Ext.getCmp('digunakan_total');
                                            var digunakanP = Ext.getCmp('bahan_digunakanP');
                                            if (bahanP > 0 && matapisau <= 1) {
                                                digunakanP.setValue( 
                                                    bahanP + 10
                                                );
                                            }
                                            else if (bahanP > 0 && matapisau <= 2) {
                                                digunakanP.setValue( 
                                                   (bahanP * matapisau)+ 5 + 3 + 3 
                                                );
                                            }
                                            else if (bahanP > 0 && matapisau <= 3) {
                                                digunakanP.setValue( 
                                                   (bahanP * matapisau)+ 5 + 5 + 3 + 3
                                                );
                                            }
                                            else if (bahanP > 0 && matapisau <= 4) {
                                                digunakanP.setValue( 
                                                   (bahanP * matapisau)+ 5 + 5 + 5 + 3 + 3 
                                                );
                                            }
                                            else if (bahanP > 0 && matapisau <= 5) {
                                                digunakanP.setValue( 
                                                   (bahanP * matapisau)+ 5 + 5 + 5 + 5 + 3 + 3
                                                );
                                            }
                                            else if (bahanL > 0 && order > 0) {
                                                digunakan_total.setValue( 
                                                   (bahanL+ 3)* order / 1000
                                                );
                                        }
                                    }  

                                    }
                                },
                                items :[
                                    {
                                    xtype: 'numberfield',
                                    id: 'bahan_ukuranP',
                                    name: 'spk_ukuranP', 
                                    fieldLabel: 'Ukuran', 
                                    labelAlign: 'top', 
                                    allowBlank: false, 
                                    margin: '5 5 0 0', 
                                    flex: 2
                               },{
                                    xtype: 'label', text: 'X', margin: '25 5 0 0'
                               },{
                                    xtype: 'numberfield',
                                    id: 'bahan_ukuranL',
                                    name: 'spk_ukuranL', 
                                    fieldLabel: '', 
                                    labelAlign: 'top', 
                                    allowBlank: false, 
                                    margin: '22 5 0 0', 
                                    flex: 2  
                                },{
                                    id: 'bahan_gap',
                                    name: 'spk_gap',
                                    labelAlign: 'top',
                                    fieldLabel: 'GAP',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                    readOnly: false,
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var order = Ext.getCmp('spk_order').getValue();
                                            var upp = Ext.getCmp('spk_upp').getValue();
                                            var total = Ext.getCmp('spk_total');
                                            var order_baris = Ext.getCmp('spk_mataperbaris').getValue();
                                            //----
                                            var bahan_l = Ext.getCmp('bahan_ukuranL').getValue();
                                            var total_all = Ext.getCmp('digunakan_total');
                                            var bahan_gap = Ext.getCmp('bahan_gap').getValue();
                                            if (order > 0 && upp > 0 && order_baris > 0) {
                                                total.setValue( 
                                                        order * (order_baris / upp)
                                                );
                                                    total_all.setValue(
                                                        (bahan_l + bahan_gap) * order / 1000
                                                    );
                                            }
                                        }
                                    }
                                    
                                },{
                                    id: 'spk_mataperbaris',
                                    xtype: 'numberfield',
                                    name: 'spk_mataperbaris',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total Baris Order',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: false,
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var order = Ext.getCmp('spk_order').getValue();
                                            var upp = Ext.getCmp('spk_upp').getValue();
                                            var total = Ext.getCmp('spk_total');
                                            var order_baris = Ext.getCmp('spk_mataperbaris').getValue();
                                            //----
                                            var bahan_l = Ext.getCmp('bahan_ukuranL').getValue();
                                            var total_all = Ext.getCmp('digunakan_total');
                                            var bahan_gap = Ext.getCmp('bahan_gap').getValue();
                                            if (order > 0 && upp > 0 && order_baris > 0) {
                                                total.setValue( 
                                                        order * (order_baris / upp)
                                                );
                                                    total_all.setValue(
                                                        (bahan_l + bahan_gap) * order / 1000
                                                    );
                                            }
                                        }
                                    }
                                    
                                },{
                                    id: 'spk_matapisau',
                                    name: 'spk_matapisau',
                                    labelAlign: 'top',
                                    fieldLabel: 'Baris Mata Pisau',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: false
                                    
                                },{
                                    xtype: 'numberfield',
                                    name: 'spk_jumlahpisau',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total Mata Pisau',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 2,
                                    readOnly: false
                                    
                                }]
                            },/*{
                                xtype: 'container',
                                layout: 'hbox',
                                region: 'right',
                                layoutConfig: {columns: 2},
                                //defaults: {frame:true, width: 78, height: 104},
                                title: 'Employee',
                                margins: '5 5 5 0',
                                items :
                                [{
                                xtype: 'box',
                                name:'',
                                id:'',
                                region:'right',
                                //region:'west',
                                autoEl: {tag: 'img', src: 'someurl',heigth:'100',width:'74'},
                                anchor:'20%'
                              }]  
                            },*/{
                                xtype: 'container',
                                layout: 'hbox',
                                margin: '5 0',
                                anchor: '100%',
                                defaults: {
                                    xtype: 'numberfield',
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var order = Ext.getCmp('spk_order').getValue();
                                            var upp = Ext.getCmp('spk_upp').getValue();
                                            var total = Ext.getCmp('spk_total');
                                            var order_baris = Ext.getCmp('spk_mataperbaris').getValue();
                                            //----
                                            var bahan_l = Ext.getCmp('bahan_ukuranL').getValue();
                                            var bahan_gap = Ext.getCmp('bahan_gap').getValue();
                                            var total_all = Ext.getCmp('digunakan_total');
                                            if (order > 0 && upp > 0 && order_baris > 0) {
                                                total.setValue( 
                                                        order * (order_baris / upp)
                                                );
                                                    
                                                    total_all.setValue(
                                                        (bahan_l + bahan_gap ) * order / 1000
                                                    );
                                                    
                                            }
                                        }
                                    }                                      
                                },
                                items: [{
                                    id: 'spk_order',
                                    name: 'spk_qtyorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty Order',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    flex: 2
                                },{
                                    id: 'spk_upp',
                                    name: 'spk_upporder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty UPP',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    flex: 2
                                },{
                                    id: 'spk_total',
                                    name: 'spk_totalorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    margin: '5 5 0 0',
                                    readOnly: true,
                                    flex: 2
                                },{
                                    xtype:'textfield',
                                    id: 'bahan_qtyname',
                                    name: 'spk_qtyname',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty Type',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
                                    readOnly: true
                                },{
                                    xtype:'textfield',
                                    id: 'bahan_totalname',
                                    name: 'spk_totalname',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total Type',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    flex: 1,
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
                                    name: 'bahan_digunakan',
                                    id: 'bahan_jenis2',
                                    labelAlign: 'top',
                                    fieldLabel: 'Jenis Bahan',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    id: 'bahan_digunakanP',
                                    name: 'ukuranP_digunakan',
                                    labelAlign: 'top',
                                    fieldLabel: 'Ukuran',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    readOnly: true
                                },{
                                    xtype: 'label',
                                    text: 'X',
                                    margin: '25 5 0 0'
                                },{
                                    id: '',
                                    name: 'ukuranL_digunakan',
                                    labelAlign: 'top',
                                    value: '1000',
                                    allowBlank: 'false',
                                    margin: '22 5 0 0',
                                    width: '20%',
                                    readOnly: false
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                margin: '5 0',
                                anchor: '100%',
                                defaults: {
                                    xtype: 'numberfield',
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var total_all = Ext.getCmp('digunakan_total').getValue();
                                            var jml_roll = Ext.getCmp('jml_roll');
                                            var digunakanP = Ext.getCmp('bahan_digunakanP').getValue();
                                            
                                            var total_luas = Ext.getCmp('total_m2');
                                            if (total_all > 0 ) {
                                                    jml_roll.setValue(
                                                        total_all / 1000
                                                    );
                                                    
                                                    total_luas.setValue(
                                                        (digunakanP / 1000) * total_all 
                                                    );
                                            }
                                        }
                                    }                                      
                                },
                                items: [{
                                    xtype: 'numberfield',
                                    id: 'jml_roll',
                                    name: 'jml_roll',
                                    fieldLabel: 'Jumlah Roll',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '30%',
                                    flex: 1,
                                    readOnly: true
                                },{
                                    xtype: 'numberfield',
                                    id: 'digunakan_total',
                                    name: 'total',
                                    fieldLabel: 'TOTAL',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    widthLabel:'10',
                                    allowBlank: 'false',
                                    margin: '5 5 0 8',
                                    width: '31%',
                                    flex: 1,
                                    readOnly: true
                                },{
                                    xtype: 'numberfield',
                                    id: 'total_m2',
                                    name: 'total2',
                                    fieldLabel: 'TOTAL m<sup>2</sup>',
                                    fieldStyle: 'background-color: #ffa144; background-image: none;',
                                    allowBlank: 'false',
                                    margin: '5 5 0 8',
                                    width: '31%',
                                    format: '0,00',
                                    flex: 1,
                                    readOnly: true
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textareafield',
                                margin: '5 0 ',
                                anchor: '100%',
                                items: [{
                                    id: '',
                                    name: 'keterangan_digunakan',
                                    fieldLabel: 'Keterangan',
                                    margin: '5 5 0 0',
                                    anchor: '100%',
                                    flex: 1
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchro: '100%',
                                items: [{
                                    xtype: 'datefield',
                                    labelAlign:'top',
                                    name: 'spk_tglkirim',
                                    editable: true,
                                    readOnly: false,
                                    format: 'Y-m-d',
                                    fieldLabel: 'Tanggal Kirim',
                                    allowBlank: true,
                                    margin: '0 5 0 0',
                                    flex: 1,
                                },{
                                    labelAlign:'top',
                                    name: 'spk_nosuratjalan',
                                    editable: true,
                                    readOnly: false,
                                    fieldLabel: 'No. Surat Jalan',
                                    allowBlank: true,
                                    margin: '0 5 0 0',
                                    flex: 1,
                                }]
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
        
