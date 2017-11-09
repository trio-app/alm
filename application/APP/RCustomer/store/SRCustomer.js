                Ext.define('RCustomer.model.MRCustomer',{
			extend: 'Ext.data.Model',
			fields: ['Amount','customer_nama', 'transaksi_date', 'transaksi_doc','trdetail_doc','trdetail_amount']
		});
                
                Ext.define('RCustomer.store.SRCustomer',{
                            extend: 'Ext.data.Store',
                            model: 'RCustomer.model.MRCustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RCustomer/read'
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
                