<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MItem',
        appFolder: 'application/app/MItem',
        controllers: ['Cmitem'],
        launch: function(){
               Ext.widget('GRIDmitem',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mitempanel'
                });
        }
});    
//});

</script>
<div id="mitempanel"></div>