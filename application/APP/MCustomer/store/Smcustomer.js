		Ext.define('MCustomer.model.Mmcustomer',{
			extend: 'Ext.data.Model',
			fields: ['customer_id', 'customer_nama','customer_alamat','customer_telp','customer_cp','customer_email']
		});
                
                Ext.define('MCustomer.store.Smcustomer',{
			extend: 'Ext.data.Store',
			model: 'MCustomer.model.Mmcustomer',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MCustomer/read'
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