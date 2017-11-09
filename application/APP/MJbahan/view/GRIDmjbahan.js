Ext.define('MJbahan.view.GRIDmjbahan',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDmjbahan',
    title: 'Master Data Jenis Bahan',
    collapsible: true,
    store: 'Smjbahan',
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Jenis Bahan</b>', action: 'add',
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
            { header: 'Jenis Bahan', dataIndex: 'jbahan_nama', flex: 1 },
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
        store: 'Smjbahan',
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