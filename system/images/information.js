function createAlert(title, html, type){
    Ext.create('widget.uxNotification', {
            title: title,
            html: '' + html +'',
            cls: 'ux-notification-light',
            position: 'tr',
            width: 250,
            slideInDuration: 800,
            autoCloseDelay: 2000,
            iconCls: 'ux-notification-icon-' + type
    }).show();                    
};