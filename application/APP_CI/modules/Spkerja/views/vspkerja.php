
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'Spkerja',
        appFolder: 'application/APP/Spkerja',
        controllers: ['Cspkerja'],
        launch: function(){
               Ext.widget('GRIDspkerja',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'spkerjapanel'
                });
        }
});    
//});

</script>
<div id="spkerjapanel"></div>