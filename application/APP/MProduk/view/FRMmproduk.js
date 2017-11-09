        Ext.define('MProduk.view.FRMmproduk',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMmproduk',
		//title: 'Insert Surat Perintah Kerja',
		width: 700,
		layout: 'fit',
		resizable: false,
		closeAction: 'hide',
                position: 'center',
		modal: true,
		items: [],
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
        
