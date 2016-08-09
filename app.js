var koa = require('koa');
var app = koa();

app.use(function *(){
	const request = this.request;
	this.body = JSON.stringify({ method: request.method, url: request.url, header: request.header, ip: request.ip, ips: request.ips });
});

app.listen(3000);
