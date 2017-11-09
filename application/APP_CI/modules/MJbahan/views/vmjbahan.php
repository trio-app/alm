<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MJbahan',
        appFolder: 'application/app/MJbahan',
        controllers: ['Cmjbahan'],
        launch: function(){
               Ext.widget('GRIDmjbahan',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mjbahanpanel'
                });
        }
});    
//});

</script>
<div id="mjbahanpanel"></div>