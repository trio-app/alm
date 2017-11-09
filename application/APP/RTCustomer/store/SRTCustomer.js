                Ext.define('RTCustomer.model.MRTCustomer',{
			extend: 'Ext.data.Model',
			fields: ['Price','receipt_id', 'receipt_to', 'receipt_date', 'receipt_doc', 'customer_nama','recdetail_price']
		});
                
                Ext.define('RTCustomer.store.SRTCustomer',{
                            extend: 'Ext.data.Store',
                            model: 'RTCustomer.model.MRTCustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RTCustomer/read'
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
                