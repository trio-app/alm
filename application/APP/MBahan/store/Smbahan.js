                Ext.define('MBahan.model.Mmbahan',{
			extend: 'Ext.data.Model',
			fields: ['bahan_id','bahan_nama', 'bahan_merk', 'bahan_gap', 'bahan_bentuk', 'bahan_jenis','bahan_glasin','bahan_ukuranP','bahan_ukuranL','bahan_porporasi', 'bahan_mataperbaris', 'bahan_matapisau', 'bahan_warnacetakan', 'bahan_qtyname', 'bahan_totalname', 'bahan_core', 'bahan_arahgulungan', 'bahan_sensor', 'bahan_image']
		});
                
                Ext.define('MBahan.store.Smbahan',{
			extend: 'Ext.data.Store',
			model: 'MBahan.model.Mmbahan',
			autoLoad: true,
			autoSync: true,
                        pageSize: 20,
			proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'MBahan/read'
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