
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RTDate',
        appFolder: 'application/app/RTDate',
        controllers: ['CRTDate'],
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
                                    xtype: 'FRMTDate',
                                    width: 500
                                },{
                                    xtype: 'RTDateGrid',
                                    width: 500
                                },{
                                    xtype: 'RTDateSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRTDate'
                });
        }
});    
//});

</script>
<div id="contentRTDate"></div>