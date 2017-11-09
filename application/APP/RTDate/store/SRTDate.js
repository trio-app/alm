        Ext.define('RTDate.model.MRTDate',{
			extend: 'Ext.data.Model',
			fields: ['Price','receipt_doc','receipt_date','receipt_id','customer_nama','recdetail_price']
		});

        
        Ext.define('RTDate.store.SRTDate',{
			extend: 'Ext.data.Store',
			model: 'RTDate.model.MRTDate',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RTDate/read'
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