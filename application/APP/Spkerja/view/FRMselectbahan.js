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
            { header: 'Nama Produk', dataIndex: 'bahan_nama', locked: true},
            { header: 'Merk', dataIndex: 'bahan_merk', locked: true},
            { header: 'Jenis Bahan', dataIndex: 'bahan_jenis', locked: true},
            { header: 'GAP', dataIndex: 'bahan_gap'},
            { header: 'Bentuk Ukuran', dataIndex: 'bahan_bentuk'},
            { header: 'Warna Glasin', dataIndex: 'bahan_glasin'},
            { header: 'Ukuran Panjang', dataIndex: 'bahan_ukuranP'},
            { header: 'Ukuran Lebar', dataIndex: 'bahan_ukuranL'},
            { header: 'PORPORASI', dataIndex: 'bahan_porporasi'},
            { header: 'Warna Cetakan', dataIndex: 'bahan_warnacetakan'},
            { header: 'Qty Name', dataIndex: 'bahan_qtyname',},
            { header: 'Total Name', dataIndex: 'bahan_totalname'},
            { header: 'Core', dataIndex: 'bahan_core', flex: 1},
            { header: 'Arah Gulungan', dataIndex: 'bahan_arahgulungan'},
            { header: 'Sensor', dataIndex: 'bahan_sensor'},
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Sbahanitem',
        displayInfo: true,
        displayMsg: 'Total Data {0} - {1} of {2}',
        emptyMsg: "No Data Display"
        });
        this.addEvents('removeitem');
        this.actions = {
            removeitem: Ext.create('Ext.Action', {
                text: 'Delete Record',
                handler: function () { this.fireEvent('removeitem', this.getSelected()) },
                scope: this,
                icon: baseurl + 'system/images/icons/delete.gif',
            })
        };
        var contextMenu = Ext.create('Ext.menu.Menu', {
            items: [
                this.actions.removeitem
            ]
        });
        this.on({
            itemcontextmenu: function (view, rec, node, index, e) {
                e.stopEvent();
                contextMenu.showAt(e.getXY());
                return false;
            }
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