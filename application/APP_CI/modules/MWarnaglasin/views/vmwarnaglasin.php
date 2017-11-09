<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MWarnaglasin',
        appFolder: 'application/app/MWarnaglasin',
        controllers: ['Cmwarnaglasin'],
        launch: function(){
               Ext.widget('GRIDmwarnaglasin',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mwarnaglasinpanel'
                });
        }
});    
//});

</script>
<div id="mwarnaglasinpanel"></div>