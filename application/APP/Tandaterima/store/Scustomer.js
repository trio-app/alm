		Ext.define('Tandaterima.model.Mcustomer',{
			extend: 'Ext.data.Model',
			fields: ['customer_id', 'customer_nama', 'customer_alamat', 'customer_telp', 'customer_cp', 'customer_email']
		});
                
                Ext.define('Tandaterima.store.Scustomer',{
			extend: 'Ext.data.Store',
			model: 'Tandaterima.model.Mcustomer',
			autoLoad: true,
			autoSync: true,
                        pageSize: 10,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'Tandaterima/customerTT'
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