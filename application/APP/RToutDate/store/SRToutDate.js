        Ext.define('RToutDate.model.MRToutDate',{
			extend: 'Ext.data.Model',
			fields: ['Price','receiptout_doc','receiptout_date','receiptout_id','customer_nama','recdetailout_price']
		});

        
        Ext.define('RToutDate.store.SRToutDate',{
			extend: 'Ext.data.Store',
			model: 'RToutDate.model.MRToutDate',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RToutDate/read'
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