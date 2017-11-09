<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MMerk',
        appFolder: 'application/app/MMerk',
        controllers: ['Cmmerk'],
        launch: function(){
               Ext.widget('GRIDmmerk',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '5',
                        renderTo: 'mmerkpanel'
                });
        }
});    
//});

</script>
<div id="mmerkpanel"></div>