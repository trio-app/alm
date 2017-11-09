/* Ext.define('modelJumlah',{
    extend : 'Ext.data.Model',
    fields:[
            {name:'spk_qtyorder', type:'float'}, 
                            {name:'spk_upporder', type:'float'},
                            {name:'spk_totalorder', type:'float',
                                convert:function(val,row){
                                    return row.data.spk_qtyorder / row.data.spk_upporder;
                                }
                            }
    ]
})
var storeJumlah = Ext.create('Ext.data.ArrayStore',{
    id:'jumlah',
    autoLoad:'true',
    data:[],
    model:'modelJumlah',
    proxy: {
             type:'memory'
    }
}) */
 
        
                               
        
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
                            anchor: '100%',                          
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
                                layout: 'hbox',
                                defaultType: 'numberfield', 
                                margin : '5 0',
                                anchor: '100%',
                                items :[{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    fieldLabel: 'Jenis Bahan',
                                    name:'spk_jenisbahan',
                                    displayField: 'jbahan_nama',
                                    valueField :'jbahan_nama',
                                    allowBlank: false,
                                    queryMode:'local',
                                    margin: '5 5 0 0',
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        autoLoad:true,
                                        fields: [ 'jbahan_nama' ],
                                        proxy: {
                                            type: 'ajax',
                                            url: baseurl + 'MJbahan/cbolist',
                                            reader: {
                                                type: 'json',
                                            }
                                        }
                                    }),
                                    labelAlign:'top'

                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    fieldLabel: 'Warna Glasin',
                                    name:'spk_glasin',
                                    displayField: 'warnaglasin_nama',
                                    valueField :'warnaglasin_nama',
                                    allowBlank: false,
                                    queryMode:'local',
                                    margin: '5 5 0 0',
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        autoLoad:true,
                                        fields: [ 'warnaglasin_nama' ],
                                        proxy: {
                                            type: 'ajax',
                                            url: baseurl + 'MWarnaglasin/cbolist',
                                            reader: {
                                                type: 'json',
                                            }
                                        }
                                    }),
                                    labelAlign:'top'
                               },{
                                    xtype: 'numberfield', 
                                    name: 'spk_ukuranP', 
                                    fieldLabel: 'Ukuran', 
                                    labelAlign: 'top', 
                                    allowBlank: false, 
                                    margin: '5 5 0 0', 
                                    anchor: '20%'
                               },{
                                    xtype: 'label', text: 'X', margin: '25 5 0 0'
                               },{
                                    xtype: 'numberfield', 
                                    name: 'spk_ukuranL', 
                                    fieldLabel: '', 
                                    labelAlign: 'top', 
                                    allowBlank: false, 
                                    margin: '25 5 0 0', 
                                    anchor: '20%'  
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_porporasi',
                                    fieldLabel: 'PROPORASI',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['YA','TIDAK'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_mataperbaris',
                                    fieldLabel: 'Jml. Mata Perbaris',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['1','2','3','4','5','Continus'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_warnacetakan',
                                    fieldLabel: 'Warna Cetakan',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['1 Warna','2 Warna', '3 Warna', '4 Warna', 'Polos', 'Sparasi'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'filefield',
                                    anchor: '30%',
                                    name: 'spk_image',
                                    fieldLabel: 'Image',
                                    margin: '5 5 0 0',
                                    labelAlign:'top'
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
                                
                            }*/{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_qtyname',
                                    fieldLabel: 'QTY Name',
                                    allowBlank: false,
                                    margin: '5 157 0 0',
                                    store:['ROLL','BOX', 'Lembar'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_totalname',
                                    fieldLabel: 'TOTAL Name',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['ROLL','BOX', 'Lembar'],
                                    labelAlign:'top'
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaults: {
                                    xtype: 'numberfield',
                                    listeners: {
                                        change: function(field, newVal, oldVal) {
                                            console.log("Calculating");
                                            var order = Ext.getCmp('spk_order').getValue();
                                            var upp = Ext.getCmp('spk_upp').getValue();
                                            var total = Ext.getCmp('spk_total');
                                            if (order > 0 && upp > 0) {
                                                total.setValue( 
                                                        order / upp
                                                );
                                            }
                                        }
                                    }                                      
                                },
                                margin: '5 0',
                                anchor: '100%',
                                //id:'jumlah',
                                //store:'storeJumlah',
                                items: [{
                                    name: 'spk_qtyorder',
                                    id:'spk_order',
                                    //dataIndex:'spk_qtyorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty Order',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    //type: 'float'
                                },{
                                    name: 'spk_upporder',
                                    id:'spk_upp',
                                    //dataIndex:'spk_upporder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Qty UPP',
                                    allowBlank: 'false',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    //type: 'float'
                                },{
                                    name: 'spk_totalorder',
                                    id:'spk_total',
                                    //dataIndex:'spk_totalorder',
                                    labelAlign: 'top',
                                    fieldLabel: 'Total',
                                    margin: '5 5 0 0',
                                    width: '20%',
                                    //type: 'float',
                                    readOnly: true,
 
                                }]
                            },{
                                xtype: 'container',
                                layout: 'hbox',
                                defaultType: 'textfield',
                                margin: '5 0',
                                anchor: '100%',
                                items: [{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_core',
                                    fieldLabel: 'CORE',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['1"','1,5"', '3"', 'Lembar'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_arahgulungan',
                                    fieldLabel: 'ARAH GULUNGAN',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['INSIDE','OUTSIDE'],
                                    labelAlign:'top'
                                },{
                                    xtype: 'combo',
                                    anchor:'30%',
                                    name:'spk_sensor',
                                    fieldLabel: 'SENSOR',
                                    allowBlank: false,
                                    margin: '5 5 0 0',
                                    store:['Gap (3mm)','Black Mark', 'Coak'],
                                    labelAlign:'top'
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
                                    xtype: 'combo',
                                    anchor:'30%',
                                    fieldLabel: 'Jenis Bahan',
                                    name:'',
                                    displayField: 'jbahan_nama',
                                    valueField :'jbahan_nama',
                                    allowBlank: false,
                                    queryMode:'local',
                                    readOnly: 'true',
                                    margin: '5 5 0 0',
                                    store: Ext.create('Ext.data.ArrayStore', {
                                        autoLoad:true,
                                        fields: [ 'jbahan_nama' ],
                                        proxy: {
                                            type: 'ajax',
                                            url: baseurl + 'MJbahan/cbolist',
                                            reader: {
                                                type: 'json',
                                            }
                                        }
                                    }),
                                    labelAlign:'top'

                                },{
                                    id: '',
                                    name: '',
                                    labelAlign: 'top',
                                    fieldLabel: 'Ukuran',
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
                                    width: '30%',
                                    readOnly: true
                                },{
                                    id: '',
                                    name: '',
                                    fieldLabel: 'TOTAL',
                                    allowBlank: 'false',
                                    padding:'10 10 10 10',
                                    margin: '5 5 0 0',
                                    width: '30%',
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
                                    name: '',
                                    fieldLabel: 'Keterangan',
                                    margin: '5 5 0 0',
                                    anchor: '100%'
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
        
