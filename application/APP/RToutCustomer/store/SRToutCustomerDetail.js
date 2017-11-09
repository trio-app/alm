               Ext.define('RToutCustomer.model.MRToutCustomerSelected',{
			extend: 'Ext.data.Model',
			fields: [
                                 'recdetailout_id',
                                 'recdetailout_doc',
                                 'recdetailout_invoice',
                                 'recdetailout_delivery',
                                 'recdetailout_po',
                                 'recdetailout_date',
                                 'recdetailout_price'
                                 ]
		});
                
                Ext.define('RToutCustomer.store.SRToutCustomerDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RToutCustomer.model.MRToutCustomerSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RToutCustomer/getGrid'
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