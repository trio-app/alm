
<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'Packinglist',
        appFolder: 'application/app/Packinglist',
        controllers: ['Cpackinglist'],
        launch: function(){
               Ext.widget('GRIDpackinglist',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'packinglistpanel'
                });
        }
});    
//});

</script>
<div id="packinglistpanel"></div>