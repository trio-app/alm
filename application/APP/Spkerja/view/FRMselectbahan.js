var table = Ext.define('Spkerja.view.VSelect_Bahanitem',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.WBahanitem',
    store: 'Sbahanitem',  
    initComponent: function () {
        this.tbar = [{
           text: '<b>Insert Produk Bahan</b>', action: 'add_produk',
           icon: baseurl + 'system/images/icons/drop-add.gif'
        },
            '->',
        {
            xtype: 'textfield',
            itemId:'searchDataBahan',
            emptyText: 'Search Data',
            fieldStyle: 'text-align: left;align:right;'
        }  
        ];
        this.columns = [
            { xtype: 'rownumberer' },
            { header: 'Nama Produk', dataIndex: 'bahan_nama'},
            { header: 'Jenis Bahan', dataIndex: 'bahan_jenis'},
            { header: 'Warna Glasin', dataIndex: 'bahan_glasin'},      
            { header: 'Ukuran Panjang', dataIndex: 'bahan_ukuranP'},      
            { header: 'Ukuran Lebar', dataIndex: 'bahan_ukuranL'},
            { header: 'PORPORASI', dataIndex: 'bahan_porporasi'},
            { header: 'Warna Cetakan', dataIndex: 'bahan_warnacetakan'},
            { header: 'Qty Name', dataIndex: 'bahan_qtyname'},
            { header: 'Total Name', dataIndex: 'bahan_totalname'},
            { header: 'Core', dataIndex: 'bahan_core'},
            { header: 'Arah Gulungan', dataIndex: 'bahan_arahgulungan'},
            { header: 'Sensor', dataIndex: 'bahan_sensor'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Sbahanitem',
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

        Ext.define('Spkerja.view.FRMselectbahan',{
		extend: 'Ext.window.Window',
		alias: 'widget.FRMselectbahan',
		title: 'Select Produk Bahan',
		width: 1000,
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