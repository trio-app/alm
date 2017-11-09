Ext.define('Packinglist.view.GRIDpackinglist',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDpackinglist',
    id: 'PackingListGrid',
    title: 'Packing List',
    collapsible: true,
    store: 'Spackinglist',  
    viewConfig : {
        listeners : {
            'itemkeydown' : function(view, record, item, index, key) {
                if (key.getKey() == 46) {//the delete button
                    var selection = this.getSelectionModel().getSelection();
                    
                    //delete records
                }  
            }            
        }
        
    },    
    initComponent: function () {
        this.tbar = [{
            text: '<b>Insert Transaction</b>', action: 'add',
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
            { header: 'No. Document', dataIndex: 'transaksi_doc', flex: 1 },
            { header: 'Customer', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Date', dataIndex: 'transaksi_date', flex: 1 },
            { header: 'Action',
                    xtype: 'actioncolumn',
                    width:80,
                    align:'center',
                    sortable: false,
                    items: [{
                            handler: function(view, cell, rowIndex, colIndex, e, record, row) {
                                this.addEvents('reportPreview');
                                this.fireEvent('reportPreview',view, cell, rowIndex, colIndex, e, record, row);                                       
                            },
                            icon: baseurl + 'system/images/icons/page_copy.png',
                            tooltip: 'Print Preview'                               
                    },{
                            handler: function(view, cell, rowIndex, colIndex, e, record, row) {
                                this.addEvents('deleteClick');
                                this.fireEvent('deleteClick',view, cell, rowIndex, colIndex, e, record, row);                                       
                            },
                            icon: baseurl + 'system/images/icons/delete.gif',
                            tooltip: 'Delete Row' 
                    }]
                }            
        ];
      this.bbar = Ext.create('Ext.PagingToolbar', {
        store: 'Spackinglist',
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