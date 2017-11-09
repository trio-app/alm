		Ext.define('Spkerja.model.Mbahanitem',{
			extend: 'Ext.data.Model',
			fields: ['bahan_id', 'bahan_nama', 'bahan_jenis', 'bahan_merk', 'bahan_gap', 'bahan_bentuk', 'bahan_glasin', 'bahan_ukuranP', 'bahan_ukuranL', 'bahan_porporasi', 'bahan_mataperbaris', 'bahan_jumlahpisau' , 'bahan_matapisau', 'bahan_warnacetakan', 'bahan_qtyname', 'bahan_totalname', 'bahan_core', 'bahan_arahgulungan', 'bahan_sensor']
		});
                
                Ext.define('Spkerja.store.Sbahanitem',{
			extend: 'Ext.data.Store',
			model: 'Spkerja.model.Mbahanitem',
			autoLoad: true,
			autoSync: true,
                        pageSize: 10,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'Spkerja/bahanitemSPK'
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