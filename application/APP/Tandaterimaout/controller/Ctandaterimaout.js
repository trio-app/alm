                    Ext.define('Tandaterimaout.controller.Ctandaterimaout',{
			extend: 'Ext.app.Controller',
			views: ['GRIDtandaterimaout','FRMtandaterimaout','FRMselectcust'],
			stores  : ['Standaterimaout','Scustomer'],
			refs: [{
				ref: 'formWindowout',
				xtype: 'FRMtandaterimaout',
				selector: 'FRMtandaterimaout',
				autoCreate: true
			},{
				ref: 'formCustout',
				xtype: 'FRMcustomer',
				selector: 'FRMcustomer',
				autoCreate: true
                        }],
                             init: function(){
				this.control({
					'GRIDtandaterimaout > toolbar > button[action=add_transaction]' :{
						click: this.showAddTransaction
                                                //alert('test');
					},
                                        'GRIDtandaterimaout > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                         
					'GRIDtandaterimaout' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMtandaterimaout button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDtandaterimaout actioncolumn': {
                                          reportPreview: this.reportPreview,
                                          deleteClick: this.deleteItem
                                        },
                                        'Wselected_ItemTandaout button[action=add_item]':{
                                                click: this.addItem
                                        },
					'FRMtandaterimaout button[action=select_custout]':{
						click: this.showCustGrid
					},
					'WCustomer':{
						itemdblclick: this.custdblclick
					},
                                        'WCustomer > toolbar > textfield[itemId=searchDataCustomer]':{
						specialkey: this.searchDataCustomer
					}
				});
			},
                        showAddTransaction: function(){
				var win = this.getFormWindowout();
				win.setTitle('Insert Tanda Terima Out');
				win.setAction('add');
				win.down('form').getForm().reset();
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Tandaterimaout/autoNum',
                                    method: 'POST',
                                    success: function(transport){
                                        Ext.getCmp('receiptout_doc').setValue(transport.responseText);
                                    }
                                });    
                                var grid = Ext.getCmp('selectedGridTandaout');
                                grid.getStore('SelectedStoreTandaout').reload();
                                
				win.show();
			},
                        showCustGrid: function(){
				var win = this.getFormCustout();
				win.show();
			},   
			custdblclick: function(me, record, item, index){                            
				var win = this.getFormWindowout();
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                                
                                var cust = this.getFormCustout();
                                cust.hide();
			},                        
			showItemGrid: function(){
				var win = this.getFormItem();
				win.show();
                                //alert('test');
			},   
                        searchData:function (f,e) {
                            var store = this.getStandaterimaoutStore();//Ext.getStore('STassetlocation');
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
                        searchDataCustomer:function (f,e) {
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
				var win = this.getFormWindowout();
				win.setTitle('Update Tanda Terima OUT');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
                                var grid = Ext.getCmp('selectedGridTandaout');
                                grid.getStore('SelectedStoreTandaout').reload();
                                var store = grid.getStore('SelectedStoreTandaout');
                                //console.log(record);
                                
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Tandaterimaout/getGrid',
                                    params: {recdetailout_doc: record.data.receiptout_doc},
                                    method: 'POST',
                                    fields: ['recdetailout_id','recdetailout_doc','recdetailout_invoice','recdetailout_delivery','recdetailout_po','recdetailout_date','recdetailout_price'],
                                    success: function(transport){
                                        store.loadData(Ext.decode(transport.responseText));
                                    }
                                });
                                //alert(record.data.transaksi_doc);
				win.show();
			},    
                        addItem: function(me, record, item, index){
                            var win = this.getFormWindowout();
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

                            Ext.Msg.confirm('Delete Tanda Terima OUT', 'Are you sure?', function (button) {
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
                                                                 html : '<iframe src="'+ baseurl +'Tandaterimaout/reportPreview/'+ record.data.receiptout_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        },
                        doProsesCRUD : function (inAction,record,data){
                            var store = this.getStandaterimaoutStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'Tandaterimaout/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Tanda Terima OUT', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Tanda Terima OUT', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Tanda Terima OUT', 'Update Data Success', 'success');
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
                                var win = this.getFormWindowout();
                                var store = this.getStandaterimaoutStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('Tandaterimaout.model.Mtandaterimaout', values);
                                console.log(action);
                                
                                var grid = Ext.getCmp('selectedGridTandaout');//var myRecordDef = Ext.data.Record.create();
                                var myStore = grid.getStore('SelectedStoreTandaout');
                                var data = [];
                                myStore.each(function(rec){
                                    data.push(rec.data);
                                });                                  
                                
				if(action == 'edit'){
                                    if(form.isValid()){
                                        this.doProsesCRUD('update',recValue,data);
                                        //this.doSaveGrid('updateGrid', data);
                                        win.close();
                                    }
				}else{
                                    if(form.isValid()){
                                        this.doProsesCRUD('create',recValue,data);
                                        //this.doSaveGrid('saveGrid', data);
                                        win.close();
                                    }
				}
			}
});