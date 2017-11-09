               Ext.define('RCustomer.model.MRCustomerSelected',{
			extend: 'Ext.data.Model',
			fields: [
                                 'item_id',
                                 'item_kode',
                                 'item_nama',
                                 'trdetail_id',
                                 'trdetail_doc',
                                 'trdetail_item',
                                 'trdetail_po',
                                 'trdetail_date',
                                 'trdetail_sjap',
                                 'trdetail_qty',
                                 'trdetail_unit',
                                 'trdetail_price',
                                 'trdetail_amount',
                                 'trdetail_weight',
                                 'trdetail_pack'
                                 ]
		});
                
                Ext.define('RCustomer.store.SRCustomerDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RCustomer.model.MRCustomerSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RCustomer/getGrid'
				},
				reader: {
					type: 'json',
					root: 'Rows',
					totalProperty: 'TotalRows',
					successProperty: 'success'
				},
				writer: {
					type: 'json',
					writeAllFields: false
				}
			}
                });