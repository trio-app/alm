                Ext.define('RSPKerja.model.MRSPKerja',{
			extend: 'Ext.data.Model',
			fields: ['Amount','customer_nama', 'transaksi_date', 'transaksi_doc','trdetail_doc','trdetail_amount']
		});
                
                Ext.define('RSPKerja.store.SRSPKerja',{
                            extend: 'Ext.data.Store',
                            model: 'RSPKerja.model.MRSPKerja',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RSPKerja/read'
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
                