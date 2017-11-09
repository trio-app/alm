		Ext.define('Packinglist.controller.Cpackinglist',{
			extend: 'Ext.app.Controller',
			views: ['GRIDpackinglist', 'FRMpackinglist'],
			stores  : ['Spackinglist','Scustomer','Sitem'],
			refs: [{
				ref: 'formWindow',
				xtype: 'FRMpackinglist',
				selector: 'FRMpackinglist',
				autoCreate: true
			},{
				ref: 'formCust',
				xtype: 'FRMcustomer',
				selector: 'FRMcustomer',
				autoCreate: true
			},{
				ref: 'formItem',
				xtype: 'FRMItem',
				selector: 'FRMItem',
				autoCreate: true
			}],
			init: function(){
				this.control({
					'GRIDpackinglist > toolbar > button[action=add]' :{
						click: this.showAddForm
                                                //alert('test');
					},
                                        'GRIDpackinglist > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchData
                                        },                                        
                                        'WCustomer > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchDataCustomer
                                        },                                        
                                        'WItem > toolbar > textfield[itemId=searchData]': {
                                                specialkey: this.searchDataItem
                                        },                                        
					'GRIDpackinglist' :{
						itemdblclick: this.onRowdblclick
					},
					'FRMpackinglist button[action=add]':{
						click: this.doSaveform
					},
					'FRMpackinglist button[action=select_cust]':{
						click: this.showCustGrid
					},
					'FRMpackinglist button[action=add_item]':{
						click: this.showItemGrid
					},
					'WCustomer':{
						itemdblclick: this.custdblclick
					},
                                        'WItem':{
                                                itemdblclick: this.addItem
                                        },
                                        'GRIDpackinglist actioncolumn': {
                                          reportPreview: this.reportPreview,
                                          deleteClick: this.deleteItem
                                        }
				});
			},
			showAddForm: function(){
				var win = this.getFormWindow();
				win.setTitle('Insert Packinglist');
				win.setAction('add');
				win.down('form').getForm().reset();
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Packinglist/autoNum',
                                    method: 'POST',
                                    success: function(transport){
                                        Ext.getCmp('transaksi_doc').setValue(transport.responseText);
                                    }
                                });    
                                var grid = Ext.getCmp('selectedGridPacking');
                                grid.getStore('SelectedStorePacking').reload();
                                
				win.show();
			},
			showCustGrid: function(){
				var win = this.getFormCust();
				win.show();
			},   
			showItemGrid: function(){
				var win = this.getFormItem();
				win.show();
                                //alert('test');
			},   
                        searchData:function (f,e) {
                            var store = this.getScontactStore();//Ext.getStore('STassetlocation');
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
                            var store = this.getSCustomerStore();//Ext.getStore('STassetlocation');
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
                            var store = this.getSItemStore();//Ext.getStore('STassetlocation');
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
				var win = this.getFormWindow();
				win.setTitle('Update Transaction');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
				win.show();                            
                        },                        
			onRowdblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setTitle('Update Packinglist');
				win.setAction('edit');
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                            
                                var grid = Ext.getCmp('selectedGridPacking');
                                grid.getStore('SelectedStorePacking').reload();
                                var store = grid.getStore('SelectedStorePacking');
                                
                                
                                Ext.Ajax.request({
                                    url: baseurl + 'Packinglist/getGrid',
                                    params: {transaksi_doc: record.data.transaksi_doc},
                                    method: 'POST',
                                    fields: ['trdetailitem_id','trdetail_doc','trdetail_item','trdetail_po','trdetail_date','trdetail_sjap','trdetail_qty','trdetail_unit','trdetail_price','trdetail_amount','trdetail_weight','trdetail_pack'],
                                    success: function(transport){
                                        store.loadData(Ext.decode(transport.responseText));
                                    }
                                });
                                //alert(record.data.transaksi_doc);
				win.show();
			},                       
			custdblclick: function(me, record, item, index){                            
				var win = this.getFormWindow();
				win.setRecordIndex(index);
				win.down('form').getForm().setValues(record.getData());
                                
                                var cust = this.getFormCust();
                                cust.hide();
			},
                        addItem: function(me, record, item, index){
                            var win = this.getFormWindow();
                            win.setRecordIndex(index);
                            //alert(record.data);
                            var grid = Ext.getCmp('selectedGridPacking');//var myRecordDef = Ext.data.Record.create();
                            //var date = Ext.Date.format(new Date(), 'Y-m-d');
                            grid.getStore('SelectedStorepacking').add({
                                trdetailitem_id : record.data.item_id,
                                trdetail_doc : Ext.getCmp('transaksi_doc').getValue(),
                                trdetail_sjap :'-',
                                trdetail_item : record.data.item_kode + ' - ' + record.data.item_nama,
                                trdetail_po : '-',
                                trdetail_date : Ext.Date.format(new Date(), 'Y-m-d'),
                                trdetail_qty : 1,
                                trdetail_unit: record.data.item_unit,
                                trdetail_price: record.data.item_harga,
                                trdetail_amount: '',
                                trdetail_weight: record.data.item_weight,
                                trdetail_weighttotal: '',
                                trdetail_upp: record.data.item_upp,
                                trdetail_pack: ''
                            });

                            var records = Ext.getStore('SelectedStorePacking').getRange();

                            console.log(records);
                            var item = this.getFormItem();
                            item.hide();

                        },
                        deleteItem:function (view, cell, rowIndex, colIndex, e, record, row) {

                            Ext.Msg.confirm('Delete Packinglist', 'Are you sure?', function (button) {
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
                                                                 html : '<iframe src="'+ baseurl +'Packinglist/reportPreview/'+ record.data.transaksi_id +'" width="100%" height="550px"></iframe>',
                                                              }]
                                                    });
                              previewPrint.show();                            
                        },
                        doProsesCRUD : function (inAction,record,data){
                            var store = this.getSpackinglistStore();//Ext.getStore('ScontactStore');
                            Ext.Ajax.request({
                                        url: baseurl + 'Packinglist/' +  inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: [JSON.stringify(record.data),'||',JSON.stringify(data)],
                                        success: function(response){
                                            switch(inAction) {
                                                case 'delete':
                                                        store.load();
                                                        createAlert('Delete Packinglist', 'Delete Data Success', 'success');
                                                        //Ext.example.msg("Delete Category","Delete Success"," verb", record.data['CategoryName'] );    
                                                    break;
                                                case 'create' :
                                                        store.load();
                                                        createAlert('Insert Packinglist', 'Insert Data Success', 'success');
                                                    break;
                                                case 'update' :
                                                        store.load();
                                                        createAlert('Update Packinglist', 'Update Data Success', 'success');
                                                    break;
                                            }

                                        },
                                        failure: function(response){
                                            //createAlert('Error ' + response.status, response.responseText, 'error');
                                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                                        }
                                    });
                        },
                        doSaveGrid: function(inAction, data){
                            Ext.Ajax.request({
                                        url: baseurl + 'Packinglist/' + inAction,
                                        method: 'POST',
                                        type:'json',
                                        params: JSON.stringify(data),
                                        success: function(response){
                                            //alert(response.responseText);
                                        },
                                        failure: function(response){
                                            //createAlert('Error ' + response.status, response.responseText, 'error');
                                            Ext.Msg.alert('server-side failure with status code ' + response.status  , response.responseText);

                                        }
                                    });
                        },
                            doSaveform: function(){
                                var win = this.getFormWindow();
                                var store = this.getSpackinglistStore();
                                var form = win.down('form');
                                //var values = form.getValues();
                                var values = form.getValues();
                                var record = form.getRecord();
                                var action = win.getAction();
                                var recValue = Ext.create('Packinglist.model.Mpackinglist', values);
                                console.log(action);
                                
                                var grid = Ext.getCmp('selectedGridPacking');//var myRecordDef = Ext.data.Record.create();
                                var myStore = grid.getStore('SelectedStorePacking');
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