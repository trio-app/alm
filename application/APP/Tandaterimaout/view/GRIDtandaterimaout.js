Ext.define('Tandaterimaout.view.GRIDtandaterimaout',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.GRIDtandaterimaout',
    id: 'TandaTerimaOutGrid',
    title: 'Tanda Terima Out',
    collapsible: true,
    store: 'Standaterimaout',  
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
            text: '<b>Insert Transaction</b>', action: 'add_transaction',
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
            { header: 'No. Document', dataIndex: 'receiptout_doc', flex: 1 },
            { header: 'Customer', dataIndex: 'customer_nama', flex: 1 },
            { header: 'Date', dataIndex: 'receiptout_date', flex: 1 },
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
        store: 'Standaterimaout',
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