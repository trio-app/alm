                Ext.define('MJbahan.model.Mmjbahan',{
			extend: 'Ext.data.Model',
			fields: ['jbahan_id', 'jbahan_nama']
		});
                
                Ext.define('MJbahan.store.Smjbahan',{
			extend: 'Ext.data.Store',
			model: 'MJbahan.model.Mmjbahan',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MJbahan/read'
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