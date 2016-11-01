#!/usr/bin/env node

var cors_proxy = require('./proxy-server');

var host = process.env.HOST || '0.0.0.0';
var port = process.env.PORT || 9090;

cors_proxy.createServer({
  originBlacklist: '',
  originWhitelist: [],
  requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2'],
  redirectSameOrigin: true
}).listen(port, host, function() {
  console.log('[' + new Date() + '] - CORS Proxy Server started on ' + host + ':' + port);
});
