		Ext.define('Tandaterima.controller.Ctandaterima',{
			extend: 'Ext.app.Controller',
			views: ['GRIDtandaterima', 'FRMtandaterima', 'FRMselectcust'],
			stores  : ['Standaterima', 'Scustomer'],
			refs: [{
				ref: 'formWindowin',
				xtype: 'FRMtandaterima',
				selector: 'FRMtandaterima',
				autoCreate: true
			},{
				ref: 'formCust',
				xtype: 'FRMcustomer',
				selector: 'FRMcustomer',
				autoCreate: true
                        }],
			init: function(){
				this.control({
					'GRIDtandaterima > toolbar > button[action=add_rec]' :{
						click: this.showAddForm
                                                //alert('test');
					},
                                        'GRIDtandaterima > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                         
					'GRIDtandaterima' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMtandaterima button[action=add]':{
						click: this.doSaveform
					},
                                        'GRIDtandaterima actioncolumn': {
                                          reportPreview: this.reportPreview,
                                          deleteClick: this.deleteItem
                                        },
                                        'Wselected_ItemTanda button[action=add_item]':{
                                                click: this.addItem
                                        },
					'FRMtandaterima button[action=select_cust1]':{
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
			showAddForm: function(){
				var win = this.getFormWindowin();
				win.setTitle('Insert Tanda Terima IN');
				win.setAction('add');
				win.down('form').getForm().reset();
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Tandaterima/autoNum',
                                    method: 'POST',
                                    success: function(transport){
                                        Ext.getCmp('receipt_doc').setValue(transport.responseText);
                                    }
                                });    
                                var grid = Ext.getCmp('selectedGridTanda');
                                grid.getStore('SelectedStoreTanda').reload();
                                
				win.show();
			},
			showCustGrid: function(){
				var win = this.getFormCust();
				win.show();
			},   
			custdblclick: function(me, record, item, index){                            
				var win = this.getFormWindowin();
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                                
                                var cust = this.getFormCust();
                                cust.hide();
			},                        
			showItemGrid: function(){
				var win = this.getFormItem();
				win.show();
                                //alert('test');
			},   
                        searchData:function (f,e) {
                            var store = this.getStandaterimaStore();//Ext.getStore('STassetlocation');
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
                        btnUpdateclick: function(me, record, item, index){
				var win = this.getFormWindowin();
				win.setTitle('Update Transaction');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();                            
                        },                        
			onRowdblclick: function(me, record, item, index){                            
				var win = this.getFormWindowin();
				win.setTitle('Update Tanda Terima IN');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
                                var grid = Ext.getCmp('selectedGridTanda');
                                grid.getStore('SelectedStoreTanda').reload();
                                var store = grid.getStore('SelectedStoreTanda');
                                //console.log(record);
                                
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Tandaterima/getGrid',
                                    params: {recdetail_doc: record.data.receipt_doc},
                                    method: 'POST',
                                    fields: ['recdetail_id','recdetail_doc','recdetail_invoice','recdetail_delivery','recdetail_po','recdetail_date','recdetail_price'],
                                    success: function(transport){
                                        store.loadData(Ext.decode(transport.responseText));
                                    }
                                });
                                //alert(record.data.transaksi_doc);
				win.show();
			},    
                        addItem: function(me, record, item, index){
                            var win = this.getFormWindowin();
                            win.setRecordIndex(index);
                            //alert(record.data);
                            var grid = Ext.getCmp('selectedGridTanda');//var myRecordDef = Ext.data.Record.create();
                            //var date = Ext.Date.format(new Date(), 'Y-m-d');
                            grid.getStore('SelectedStoreTanda').add({
                                recdetail_invoice : '-',
                                recdetail_delivery : '-',
                                recdetail_po : '-',
                                recdetail_date : '-',
                                recdetail_price : 0,
                            });

                            var records = Ext.getStore('SelectedStoreTanda').getRange();

                            console.log(records);

                        },
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Tanda Terima IN', 'Are you sure?', function (button) {
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
                                                                 html : '<iframe src="'+ baseurl +'Tandaterima/reportPreview/'+ record.data.receipt_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        },
                        doProsesCRUD : function (inAction,record,data){
                            var store = this.getStandaterimaStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'Tandaterima/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Tanda Terima IN', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Tanda Terima IN', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Tanda Terima IN', 'Update Data Success', 'success');
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
                                var win = this.getFormWindowin();
                                var store = this.getStandaterimaStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('Tandaterima.model.Mtandaterima', values);
                                console.log(action);
                                
                                var grid = Ext.getCmp('selectedGridTanda');//var myRecordDef = Ext.data.Record.create();
                                var myStore = grid.getStore('SelectedStoreTanda');
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