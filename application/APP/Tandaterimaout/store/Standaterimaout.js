		Ext.define('Tandaterimaout.model.Mtandaterimaout',{
			extend: 'Ext.data.Model',
			fields: ['receiptout_id', 'receiptout_doc', 'receiptout_from', 'receiptout_to', 'receiptout_date', 'customer_id', 'customer_nama']
		});
                
                Ext.define('Tandaterimaout.store.Standaterimaout',{
			extend: 'Ext.data.Store',
			model: 'Tandaterimaout.model.Mtandaterimaout',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'Tandaterimaout/read'
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