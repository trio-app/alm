               Ext.define('RByDate.model.MRByDateSelected',{
                        extend: 'Ext.data.Model',
			fields: [
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
                                 'trdetail_pack',
                                 'item_id',
                                 'item_nama'
                                 ]
                });
                
                Ext.define('RByDate.store.SRByDateDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RByDate.model.MRByDateSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RByDate/getGrid'
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