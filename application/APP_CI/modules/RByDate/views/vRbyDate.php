
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'RByDate',
        appFolder: 'application/app/RByDate',
        controllers: ['CRByDate'],
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
                                    xtype: 'FRMByDate',
                                    width: 500
                                },{
                                    xtype: 'RByDateGrid',
                                    width: 500
                                },{
                                    xtype: 'RByDateSelectedGrid',
                                    width: 500
                                }
                            ],
                        renderTo: 'contentRByDate'
                });
        }
});    
//});

</script>
<div id="contentRByDate"></div>