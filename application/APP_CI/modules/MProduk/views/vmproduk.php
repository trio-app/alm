<script>
//Ext.onReady(function () {
    //Ext.Loader.setConfig({  enabled: true });
    Ext.application({
        name: 'MBahan',
        appFolder: 'application/APP/MBahan',
        controllers: ['Cmbahan'],
        launch: function(){
               Ext.widget('GRIDmbahan',{
                        overflowY: 'auto',
                        width: 500,
                        autoScroll: true,
                        layout: {
                                type: 'fit',
                                align: 'stretch'
                        },
                        margin: '15',
                        renderTo: 'MasterBahan'
                });
        }
});    
//});

</script>
<div id="MasterBahan"></div>