               Ext.define('RTCustomer.model.MRTCustomerSelected',{
			extend: 'Ext.data.Model',
			fields: [
                                 'recdetail_id',
                                 'recdetail_doc',
                                 'recdetail_invoice',
                                 'recdetail_delivery',
                                 'recdetail_po',
                                 'recdetail_date',
                                 'recdetail_price'
                                 ]
		});
                
                Ext.define('RTCustomer.store.SRTCustomerDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RTCustomer.model.MRTCustomerSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RTCustomer/getGrid'
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