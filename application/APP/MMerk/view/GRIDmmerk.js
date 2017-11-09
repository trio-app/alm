Ext.define('MMerk.view.GRIDmmerk',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDmmerk',
    title: 'Master Data Merk',
    collapsible: true,
    store: 'Smmerk',
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Merk</b>', action: 'add',
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
            { header: 'Nama Merk', dataIndex: 'merk_nama', flex: 1 },
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
        store: 'Smmerk',
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