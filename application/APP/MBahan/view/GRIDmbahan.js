Ext.define('MBahan.view.GRIDmbahan',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDmbahan',
    title: 'Master Data Produk',
    collapsible: true,
    //plugins: [rowEditing],
    store: 'Smbahan',
    frame: true,
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Produk</b>', action: 'add',
            icon: baseurl + 'system/images/icons/drop-add.gif'
        },
          '->',
        {
            xtype: 'textfield',
            itemId:'searchData',
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
            { header: 'Remove',
                    xtype: 'actioncolumn',
                    width:80,
                    align:'center',
                    action:'cancel',
                    sortable: false,
                    items: [{
                    handler: function(view, cell, rowIndex, colIndex, e, record, row) {

                                      this.addEvents('itemclick');
                                      this.fireEvent('itemclick',view, cell, rowIndex, colIndex, e, record, row);


                                   },
                        icon: baseurl + 'system/images/icons/delete.gif',
                        tooltip: 'Delete Row'
                           }]
                }            
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Smbahan',
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