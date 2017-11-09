
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'Tandaterima',
        appFolder: 'application/app/Tandaterima',
        controllers: ['Ctandaterima'],
        launch: function(){
               Ext.widget('GRIDtandaterima',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'tandaterimapanel'
                });
        }
});    
//});

</script>
<div id="tandaterimapanel"></div>