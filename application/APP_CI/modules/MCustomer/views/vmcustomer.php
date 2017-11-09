<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MCustomer',
        appFolder: 'application/app/MCustomer',
        controllers: ['Cmcustomer'],
        launch: function(){
               Ext.widget('GRIDmcustomer',{
                        overflowY: 'auto',
                        //width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mcustomerpanel'
                });
        }
});    
//});

</script>
<div id="mcustomerpanel"></div>