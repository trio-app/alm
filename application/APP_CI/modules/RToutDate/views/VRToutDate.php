
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RToutDate',
        appFolder: 'application/app/RToutDate',
        controllers: ['CRToutDate'],
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
                                    xtype: 'FRToutDate',
                                    width: 500
                                },{
                                    xtype: 'RToutDateGrid',
                                    width: 500
                                },{
                                    xtype: 'RToutDateSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRToutDate'
                });
        }
});    
//});

</script>
<div id="contentRToutDate"></div>