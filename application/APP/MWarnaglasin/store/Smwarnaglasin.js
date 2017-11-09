                Ext.define('MWarnaglasin.model.Mmwarnaglasin',{
			extend: 'Ext.data.Model',
			fields: ['warnaglasin_id', 'warnaglasin_nama']
		});
                
                Ext.define('MWarnaglasin.store.Smwarnaglasin',{
			extend: 'Ext.data.Store',
			model: 'MWarnaglasin.model.Mmwarnaglasin',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MWarnaglasin/read'
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