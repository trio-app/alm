		Ext.define('Tandaterima.model.Mtandaterima',{
			extend: 'Ext.data.Model',
			fields: ['receipt_id', 'receipt_doc', 'receipt_from', 'receipt_to', 'receipt_date', 'customer_id', 'customer_nama']
		});
                
                Ext.define('Tandaterima.store.Standaterima',{
			extend: 'Ext.data.Store',
			model: 'Tandaterima.model.Mtandaterima',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'Tandaterima/read'
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