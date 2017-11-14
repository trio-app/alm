<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
		<title><?php echo $title; ?></title>
		
		<!-- ExtJs Link, Style, Script dll -->
		
		<link rel="stylesheet" type="text/css" href="<?php echo extjs_url('resources/css/ext-all.css');?>"/>
		<link rel="stylesheet" type="text/css" href="<?php echo extjs_url('resources/css/notification.css');?>"/>
		<link rel="stylesheet" type="text/css" href="<?php echo base_url('system/images/information.css');?>"/>
		<script type="text/javascript" src="<?php echo extjs_url('ext-all.js'); ?>"></script>
		<script type="text/javascript" src="<?php echo extjs_url('notification.js'); ?>"></script>
		<script type="text/javascript" src="<?php echo base_url('system/images/information.js');?>"></script>
              
                
	<script type="text/javascript">
		var baseurl = '<?php echo $base_url; ?>';
		var title = '<?php echo $title; ?>';
                var extjs_url = '<?php echo extjs_url(); ?>';
	</script>
	<script type="text/javascript">         
            
		Ext.onReady(function(){
			var loginPanel = Ext.create('Ext.form.Panel', {
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				},
				id: 'formLogin',
				title : title,
				titleAlign : 'center',
				height: 200,
				width: 320,
				bodyPadding: '20',
				defaultType: 'textfield',
				frame: true,
				items: [
					{
						fieldLabel: 'User Name',
						name: 'userid',
						width: '100%',
						allowBlank: false,
						tabIndex: 1
					},
					{
						fieldLabel: 'Password',
						name: 'userpass',
						width: '100%',
						allowBlank: false,
						inputType: 'password',
						tabIndex: 2
					}
				],
				buttons: [
					{
						text: 'Login',
						tabIndex: 3,
						formBind:true,
						handler: function(btn) {
							var selection = Ext.getCmp('formLogin').getForm().getFieldValues();
							if (Ext.getCmp('formLogin').getForm().isValid()) {
								Ext.Ajax.request({
									url: baseurl + 'Login/signIn',
									method: 'POST',
									type: 'json',
									params: JSON.stringify(Ext.getCmp('formLogin').getForm().getFieldValues()),
									success: function(response){
										if(response.responseText == 'success'){
                                                                                    createAlert('Login Success', 'Selamat Datang User', 'info');
                                                                                    window.location.assign(baseurl + 'Home');
										}else{
                                                                                    createAlert('Login Failed', 'Periksa Kembali User Name dan Password', 'error');
										}
									}
								});
							}
						}
					}
				]
			});
			
			Ext.create('Ext.container.Viewport', {
				layout: {
					type: 'vbox',
					align: 'center',
					pack: 'center'
				},
				items: [
					loginPanel
				]
			});
 
		});
	</script>
</head>
	<body>
	</body>
</html>