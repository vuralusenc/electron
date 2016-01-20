
var app = require('app');
var BrowserWindow = require('browser-window');
 
app.on('ready', function() {
    mainWindow = new BrowserWindow({
        height: 700,
        width: 900
    });

    mainWindow.loadUrl('file://' + __dirname + '/index.html');
});
