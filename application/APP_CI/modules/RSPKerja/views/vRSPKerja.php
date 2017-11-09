<script>
Ext.onReady(function (){ 
    Ext.Loader.setConfig({
                    enabled: true,
                    disableCaching: false,
                    paths: {
                        'Ext.ux.exporter': 'system/extjs/src/ux/exporter'
                    }
            });
            
    Ext.application({
            name : 'RSPKerja',
            appFolder : 'application/APP/RSPKerja',
            controllers: ['CRSPKerja'],
            
            launch: function(){
                Ext.create('Ext.container.Container',{
                        overflowY: 'auto',
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        items:[{
                                xtype: 'FRSPKerja',
                                    width: 500
                                },{
                                    xtype: 'RSPKerjaGrid',
                                    width: 500
                                },{
                                    xtype: 'RSPKerjaSelectedGrid',
                                    width: 500
                            }],
                        renderTo: 'contentRSPKerja'
                })
            }
    });

});

</script>
<div id="contentRSPKerja"></div>