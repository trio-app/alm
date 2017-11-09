               Ext.define('RToutDate.model.MRToutDateSelected',{
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
                
                Ext.define('RToutDate.store.SRToutDateDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RToutDate.model.MRToutDateSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RToutDate/getGrid'
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