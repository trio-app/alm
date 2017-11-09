                Ext.define('MCategory.model.Mmcategory',{
			extend: 'Ext.data.Model',
			fields: ['category_id', 'category_nama']
		});
                
                Ext.define('MCategory.store.Smcategory',{
			extend: 'Ext.data.Store',
			model: 'MCategory.model.Mmcategory',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MCategory/read'
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