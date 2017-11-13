<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		<title><?php echo $title; ?></title>
		
		<!-- ExtJs Link, Style, Script dll -->
		
		<link rel="stylesheet" type="text/css" href="<?php echo extjs_url('resources/css/ext-all.css'); ?>" />
		<script type="text/javascript" src="<?php echo extjs_url('ext-all-debug.js'); ?>"></script>
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('system/images/information.css'); ?>" />
                <link rel="stylesheet" type="text/css" href="<?php echo extjs_url('FilterRow.css'); ?>" />
		<script type="text/javascript" src="<?php echo extjs_url('notification.js'); ?>"></script>
		<script type="text/javascript" src="<?php echo base_url('system/images/information.js'); ?>"></script>
                <script type="text/javascript" src="<?php echo extjs_url('FilterRow.js'); ?>"></script>
        <script type="text/javascript">
		var baseurl = '<?php echo base_url(); ?>';
		var title = '<?php echo $title; ?>';
                var extjs_url = '<?php echo extjs_url(); ?>';
	</script>
	<script type="text/javascript">
                
                
		Ext.onReady(function(){
			var detailPanel = Ext.create('Ext.Panel', {
				title: 'User Information',
				collapsible: true,
				border: false,
				bodyPadding: '25 0',
				items: [
					{
						xtype: 'displayfield',
						name: 'user_id',
						margin:'0 0 0 10',
						fieldLabel: 'User Login ',
						labelAlign : 'right',
						labelWidth:70,
						value: '<span style="color:green; "><?php echo $user_login; ?></span>'
					},
					{
						xtype: 'displayfield',
						name: 'user_name',
						margin:'0 0 0 10',
						fieldLabel: 'User Name ',
						labelAlign : 'right',
						labelWidth:70,
						value: '<span style="color:green; "><?php echo $user_name; ?></span>'
					}
				],
				buttons: [
					{
						text: 'Logout',
						handler: function() {
							//alert('You clicked the button!');
							window.location.assign(baseurl + 'Login/signOut');
						}
					}
				]
			});

			//-----------------------------------------------------------------------------------

			var store = Ext.create('Ext.data.TreeStore', {
                                autoHeight: true,
				proxy: {
					type: 'ajax',
					url: baseurl + 'Home/menujs'
				}
			});

			var menu = Ext.create('Ext.tree.Panel', {
				resizable: true,
				resizeHandles: 's',
				title: 'Main Menu',
				collapsible: true,
				type: 'fit',
				height: 400,
				store: store,
				rootVisible: false,
                                autoScroll:true
			});

			menu.getSelectionModel().on('select', function(selModel, record){
                                var isfolder = false;
				var thisTab = Ext.getCmp(record.data.id);
                                isfolder = record.data.leaf;

                                if(isfolder == true){
                                    if(!thisTab){
                                            var newtab = Ext.getCmp('contentTAB').add({
                                                    title: record.data.text,
                                                    id : record.data.id,
                                                    closable: false,
                                                    closeAction: 'hide',
                                                    maximizable:true,
                                                    layout:'fit',
                                                    width:'100%',
                                                    autoLoad:{url:baseurl + record.data.id ,scripts:true},
                                                    listeners :{ 
                                                            'beforeclose': function(obj) {
                                                                
                                                                
                                                                }
                                                              }
                                            });
                                            Ext.getCmp('contentTAB').setActiveTab(newtab);
                                            console.log('Buat baru ' + record.internalId);
                                    }else{
                                            Ext.getCmp('contentTAB').setActiveTab(thisTab);
                                            console.log('Udah ada ' + record.internalId);
                                    }
                                }

			});

			//-----------------------------------------------------------------------------------

			Ext.create('Ext.Viewport', {
				layout: {
					type: 'border'
				},
					items: [{
						title: 'Asset Application',
						titleAlign: 'center',
						region: 'west', // Barat (Kiri)
						collapsible: true,
						split:true,
						margins: '5 0 5 5', // Atas - kanan - bawah - kiri
						width: 220,
						minSize: 100,
						maxSize: 500,
						items: [menu, detailPanel]
					},{
						region: 'center', // Pusat (Tengah)
						xtype: 'tabpanel',
						id: 'contentTAB',
						margins: '5 5 5 0', // Atas - kanan - bawah - kiri,
						items: {
							layout: {
								type: 'fit',
								align: 'stretch'
							},
							id:'Home/dashboard',
							title: 'Dashboard',
							closable: false,
							closeAction: 'hide',
							maximizable:true,
							autoWidth: true,
							autoHeight: true,
                                                        autoScroll: true,
							autoLoad:{url:baseurl + 'Home/dashboard' ,scripts:true}
						}		
					}
				]
			});
		});
	</script>
</head>
	<body>
		<div id="login-form"></div>
	</body>
</html>