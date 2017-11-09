Ext.define('MItem.view.GRIDmitem',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDmitem',
    title: 'Master Data Item',
    collapsible: true,
    store: 'Smitem',
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Item</b>', action: 'add',
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
            { header: 'Item Kode', dataIndex: 'item_kode'},
            { header: 'Item Nama', dataIndex: 'item_nama', flex: 1 },
            { header: 'Item Category', dataIndex: 'item_category'},
            { header: 'Item Unit', dataIndex: 'item_unit'},
            { header: 'Item Price', dataIndex: 'item_harga', xtype: 'numbercolumn' },
            { header: 'Item Weight', dataIndex: 'item_weight', xtype: 'numbercolumn', format:'0.0000'},
            { header: 'Item UPP', dataIndex: 'item_upp', xtype: 'numbercolumn' },
            {header: 'Remove',
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
        store: 'Smitem',
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