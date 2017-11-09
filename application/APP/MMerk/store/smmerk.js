                Ext.define('MMerk.model.Mmmerk',{
			extend: 'Ext.data.Model',
			fields: ['merk_id', 'merk_nama']
		});
                
                Ext.define('MMerk.store.Smmerk',{
			extend: 'Ext.data.Store',
			model: 'MMerk.model.Mmmerk',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MMerk/read'
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