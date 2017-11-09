        Ext.define('RByDate.model.MRByDate',{
			extend: 'Ext.data.Model',
			fields: ['Amount','transaksi_customer','transaksi_doc','transaksi_date','customer_nama','trdetail_doc','trdetail_amount']
		});

        
        Ext.define('RByDate.store.SRByDate',{
			extend: 'Ext.data.Store',
			model: 'RByDate.model.MRByDate',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RByDate/read'
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