
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'Tandaterimaout',
        appFolder: 'application/app/Tandaterimaout',
        controllers: ['Ctandaterimaout'],
        launch: function(){
               Ext.widget('GRIDtandaterimaout',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'tandaterimaoutpanel'
                });
        }
});    
//});

</script>
<div id="tandaterimaoutpanel"></div>