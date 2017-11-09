		Ext.define('MItem.model.Mmitem',{
			extend: 'Ext.data.Model',
			fields: ['item_id', 'item_kode', 'item_nama', 'item_category', 'item_unit', 'item_harga', 'item_upp', 'item_weight']
		});
                
                Ext.define('MItem.store.Smitem',{
			extend: 'Ext.data.Store',
			model: 'MItem.model.Mmitem',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MItem/read'
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