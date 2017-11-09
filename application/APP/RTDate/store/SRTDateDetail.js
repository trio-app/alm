               Ext.define('RTDate.model.MRTDateSelected',{
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
                
                Ext.define('RTDate.store.SRTDateDetail',{
                            extend: 'Ext.data.Store',
                            model: 'RTDate.model.MRTDateSelected',
                            autoLoad: true,
                            autoSync: true,
                            pageSize: 20,
                            proxy: {
				type: 'ajax',
                                actionMethods: 'POST',
				api: {
					read: baseurl + 'RTDate/getGrid'
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