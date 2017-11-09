		Ext.define('Packinglist.model.Mitem',{
			extend: 'Ext.data.Model',
			fields: ['item_id', 'item_kode', 'item_nama', 'item_category', 'item_unit', 'item_harga', 'item_upp', 'item_weight']
		});
                
                Ext.define('Packinglist.store.Sitem',{
			extend: 'Ext.data.Store',
			model: 'Packinglist.model.Mitem',
			autoLoad: true,
			autoSync: true,
                        pageSize: 10,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'Packinglist/item'
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