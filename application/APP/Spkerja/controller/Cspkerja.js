                    Ext.define('Spkerja.controller.Cspkerja',{
			extend: 'Ext.app.Controller',
			views: ['GRIDspkerja','FRMspkerja','FRMselectcust', 'FRMselectbahan', 'FRMinputbahan'],
			stores  : ['Sspkerja','Scustomer', 'Sbahanitem'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMspkerja',
				selector: 'FRMspkerja',
				autoCreate: true
			},{
				ref: 'formCust',
				xtype: 'FRMcustomer',
				selector: 'FRMcustomer',
				autoCreate: true
                        },{
				ref: 'formBahan',
				xtype: 'FRMselectbahan',
				selector: 'FRMselectbahan',
				autoCreate: true
			},{
				ref: 'FRMinputbahan',
				xtype: 'FRMinputbahan',
				selector: 'FRMinputbahan',
				autoCreate: true
			}],
                             init: function(){
				this.control({
					'GRIDspkerja > toolbar > button[action=add_transaction]' :{
						click: this.showAddTransaction
                                                //alert('test');
					},
                                        'GRIDspkerja > toolbar > textfield[itemId=searchDataSpkerja]': {
                                                specialkey: this.searchDataSpkerja
                                        },                                         
					'GRIDspkerja' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMspkerja button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDspkerja actioncolumn': {
                                          reportPreview: this.reportPreview,
                                          deleteClick: this.deleteItem
                                        },
                                        'Wselected_ItemTanda button[action=add_item]':{
                                                click: this.addItem
                                        },
					'FRMspkerja button[action=select_cust1]':{
						click: this.showCustGrid
					},
					'WCustomer':{
						itemdblclick: this.custdblclick
					},
                                        'WCustomer > toolbar > textfield[itemId=searchDataCustomer]': {
                                                specialkey: this.searchData
                                        },
                                        'WBahanitem > toolbar > textfield[itemId=searchDataBahan]': {
                                                specialkey: this.searchDataBahan
                                        },
                                        'WBahanitem > toolbar > button[action=add_produk]': {
                                                click: this.showAddproduk
                                        },
                                        'FRMspkerja button[action=select_bahan]':{
						click: this.showBahanGrid
					},
                                        'WBahanitem':{
						itemdblclick: this.bahandblclick
					},
                                        'FRMinputbahan button[action=add_newbahan]':{
						click: this.doSavebahan
					},
				});
			},
                        showAddTransaction: function(){
				var win = this.getFormWindow();
				//win.setTitle('Insert Transaction Out');
				win.setAction('add');
				win.down('form').getForm().reset();
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Spkerja/autoNum',
                                    method: 'POST',
                                    success: function(transport){
                                        Ext.getCmp('spk_doc').setValue(transport.responseText);
                                    }
                                });    
                                
				win.show();
			},
                        showCustGrid: function(){
				var win = this.getFormCust();
				win.show();
			},   
			custdblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                                
                                var cust = this.getFormCust();
                                cust.hide();
			},                        
			showBahanGrid: function(){
				var win = this.getFormBahan();
				win.show();
                                //alert('test');
			},
                        showAddproduk: function(){
				var win = this.getFRMinputbahan();
				win.show();
                                //alert('test');
			},
                        bahandblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                                
                                Ext.getCmp('bahan_jenis2').setValue(record.data.bahan_jenis);
                                
                                var bahan = this.getFormBahan();
                                bahan.hide();
			},
                        searchData:function (f,e) {
                            var store = this.getScustomerStore();//Ext.getStore('STassetlocation');
                            if (e.getKey() == e.ENTER) {
                                store.remoteFilter = false;
                                store.clearFilter();
                                store.remoteFilter = true;
                                store.filter([{
                                        property:'filtername',
                                        anyMatch: true,
                                        value   : f.value
                                    } ]);
                            }

                        },
                        searchDataBahan:function (f,e) {
                            var store = this.getSbahanitemStore();//Ext.getStore('STassetlocation');
                            if (e.getKey() == e.ENTER) {
                                store.remoteFilter = false;
                                store.clearFilter();
                                store.remoteFilter = true;
                                store.filter([{
                                        property:'filtername',
                                        anyMatch: true,
                                        value   : f.value
                                    } ]);
                            }

                        },
                        searchDataSpkerja:function (f,e) {
                            var store = this.getSspkerjaStore();//Ext.getStore('STassetlocation');
                            if (e.getKey() == e.ENTER) {
                                store.remoteFilter = false;
                                store.clearFilter();
                                store.remoteFilter = true;
                                store.filter([{
                                        property:'filtername',
                                        anyMatch: true,
                                        value   : f.value
                                    } ]);
                            }

                        },
                        searchDataItem:function (f,e) {
                            var store = this.getSitemStore();//Ext.getStore('STassetlocation');
                            if (e.getKey() == e.ENTER) {
                                store.remoteFilter = false;
                                store.clearFilter();
                                store.remoteFilter = true;
                                store.filter([{
                                        property:'filtername',
                                        anyMatch: true,
                                        value   : f.value
                                    } ]);
                            }

                        },                        
			onRowdblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setTitle('Update Surat Perintah Kerja');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();
			},    
                        addItem: function(me, record, item, index){
                            var win = this.getFormWindow();
                            win.setRecordIndex(index);
                            //alert(record.data);
                            var grid = Ext.getCmp('selectedGridTandaout');//var myRecordDef = Ext.data.Record.create();
                            //var date = Ext.Date.format(new Date(), 'Y-m-d');
                            grid.getStore('SelectedStoreTandaout').add({
                                recdetailout_invoice : '-',
                                recdetailout_delivery : '-',
                                recdetailout_po : '-',
                                recdetailout_date : '-',
                                recdetailout_price : 0,
                            });

                            var records = Ext.getStore('SelectedStoreTandaout').getRange();

                            console.log(records);

                        },
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Unit', 'Are you sure?', function (button) {
                                if (button == 'yes') {
                                    this.doProsesCRUD('delete',record);
                                }
                            }, this);
                        },
                        reportPreview:function(view, cell, rowIndex, colIndex, e, record, row){
                            var previewPrint = Ext.create('Ext.window.Window', {
                                                        title: 'Print Preview',
                                                        width: 1000,
                                                        height: 600,
                                                        modal   : true,
                                                        closeAction: 'hide',
                                                        items: [{ 
                                                                 xtype: 'component',
                                                                 html : '<iframe src="'+ baseurl +'spkerja/reportPreview/'+ record.data.spk_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        },
                        doProsesCRUD : function (inAction,record,data){
                            var store = this.getSspkerjaStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'spkerja/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Unit', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Unit', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Unit', 'Update Data Success', 'success');
                                                    break;
                                            }

                                        },
                                        failure: function(response){
                                            //createAlert('Error ' + response.status, response.responseText, 'error');
                                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                                        }
                                    });
                        },
                            doSaveform: function(){
                                var win = this.getFormWindow();
                                var store = this.getSspkerjaStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('Spkerja.model.Mspkerja', values);
                                console.log(values);
                                console.log(action);
                                
				if(action == 'edit'){
                                    if(form.isValid()){
                                        this.doProsesCRUD('update',recValue);
                                        win.close();
                                    }
				}else{
                                    if(form.isValid()){
                                        this.doProsesCRUD('create',recValue);
                                        win.close();
                                    }
				}
			},
                        
                            doSavebahan: function(){
                                var win = this.getFRMinputbahan();
                                var store = this.getSbahanitemStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('Spkerja.model.Mbahanitem', values);
                                console.log(values);
                                console.log(action);
                                
				if(action == ''){
                                    if(form.isValid()){
                                        this.doProsesCRUD('update',recValue);
                                        win.close();
                                    }
				}else{
                                    if(form.isValid()){
                                        this.doProsesCRUD('createbahan',recValue);
                                        win.close();
                                    }
				}
			}
});