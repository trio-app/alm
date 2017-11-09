		Ext.define('Spkerja.model.Mcustomer',{
			extend: 'Ext.data.Model',
			fields: ['customer_id', 'customer_nama', 'customer_alamat', 'customer_telp', 'customer_cp', 'customer_email']
		});
                
                Ext.define('Spkerja.store.Scustomer',{
			extend: 'Ext.data.Store',
			model: 'Spkerja.model.Mcustomer',
			autoLoad: true,
			autoSync: true,
                        pageSize: 10,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'SPKerja/customerSPK'
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