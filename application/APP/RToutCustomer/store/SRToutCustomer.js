                Ext.define('RToutCustomer.model.MRToutCustomer',{
			extend: 'Ext.data.Model',
			fields: ['Price','receiptout_id', 'receiptout_to', 'receiptout_date', 'receiptout_doc', 'customer_nama','recdetailout_price']
		});
                
                Ext.define('RToutCustomer.store.SRToutCustomer',{
                            extend: 'Ext.data.Store',
                            model: 'RToutCustomer.model.MRToutCustomer',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RToutCustomer/read'
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
                