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
        name: 'RCustomer',
        appFolder: 'application/APP/RCustomer',
        controllers: ['CRCustomer'],
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
                                    xtype: 'FRCustomer',
                                    width: 500
                                },{
                                    xtype: 'RCustomerGrid',
                                    width: 500
                                },{
                                    xtype: 'RCustomerSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRCustomer'
                });
                
            }
        }
    );    
});

</script>
<div id="contentRCustomer"></div>