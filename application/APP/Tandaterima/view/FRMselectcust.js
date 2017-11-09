var table = Ext.define('Tandaterima.view.VSelect_Cust',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.WCustomer',
    store: 'Scustomer',  
    initComponent: function () {
        this.tbar = [
            '->',
        {
            xtype: 'textfield',
            itemId:'searchDataCustomer',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Customer', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Alamat', dataIndex: 'customer_alamat', flex: 1 },      
            { header: 'No. Telp', dataIndex: 'customer_telp', flex: 1 },      
            { header: 'Email', dataIndex: 'customer_email', flex: 1 },      
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Scustomer',
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
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

        Ext.define('Tandaterima.view.FRMselectcust',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMcustomer',
		title: 'Select Customer',
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
                            border: '0'
			},
			defaults: {
                            xtype: 'textfield',
                            anchor: '100%'
			},
			items: [table]
		}],
		buttons: [{
                        text   : 'Cancel',
                        handler: function () { 
                        this.up('window').close();
                }
                }]

	});