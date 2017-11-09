<script>
Ext.onReady(function () {
    Ext.Loader.setConfig({
                    enabled: true,
                    disableCaching: false,
                    paths: {
                        'Ext.ux.exporter': 'system/extjs/src/ux/exporter'
                    }
                });            
    Ext.application({
        name: 'RTCustomer',
        appFolder: 'application/APP/RTCustomer',
        controllers: ['CRTCustomer'],
        launch: function(){
               Ext.create('Ext.container.Container',{
                        overflowY: 'auto',
                        //height: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        items: [{
                                    xtype: 'FRTCustomer',
                                    width: 500
                                },{
                                    xtype: 'RTCustomerGrid',
                                    width: 500
                                },{
                                    xtype: 'RTCustomerSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRTCustomer'
                });
                
            }
        }
    );    
});

</script>
<div id="contentRTCustomer"></div>