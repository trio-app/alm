<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MUnit',
        appFolder: 'application/app/MUnit',
        controllers: ['Cmunit'],
        launch: function(){
               Ext.widget('GRIDmunit',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'munitpanel'
                });
        }
});    
//});

</script>
<div id="munitpanel"></div>