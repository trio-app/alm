    Ext.define('MCustomer.view.GRIDmcustomer',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDmcustomer',
    title: 'Master Data Customer',
    collapsible: true,
    store: 'Smcustomer',
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Customer</b>', action: 'add',
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
            { header: 'Nama Perusaan ', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Alamat Lengkap', dataIndex: 'customer_alamat', flex: 1 },
            { header: 'No. Telp', dataIndex: 'customer_telp', flex: 1 },
            { header: 'Contact Peson', dataIndex:'customer_cp', flex: 1},
            { header: 'Email ', dataIndex: 'customer_email', flex: 1 },
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
        store: 'Smcustomer',
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