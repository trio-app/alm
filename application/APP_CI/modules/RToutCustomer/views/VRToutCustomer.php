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
        name: 'RToutCustomer',
        appFolder: 'application/APP/RToutCustomer',
        controllers: ['CRToutCustomer'],
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
                                    xtype: 'FRToutCustomer',
                                    width: 500
                                },{
                                    xtype: 'RToutCustomerGrid',
                                    width: 500
                                },{
                                    xtype: 'RToutCustomerSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRToutCustomer'
                });
                
            }
        }
    );    
});

</script>
<div id="contentRToutCustomer"></div>