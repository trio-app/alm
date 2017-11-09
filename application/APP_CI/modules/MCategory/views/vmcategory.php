<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MCategory',
        appFolder: 'application/app/MCategory',
        controllers: ['Cmcategory'],
        launch: function(){
               Ext.widget('GRIDmcategory',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mcategorypanel'
                });
        }
});    
//});

</script>
<div id="mcategorypanel"></div>