		Ext.define('MUnit.model.Mmunit',{
			extend: 'Ext.data.Model',
			fields: ['unit_id', 'unit_nama']
		});
                
                Ext.define('MUnit.store.Smunit',{
			extend: 'Ext.data.Store',
			model: 'MUnit.model.Mmunit',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MUnit/read'
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