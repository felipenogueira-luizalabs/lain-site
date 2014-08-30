var http = require('http');
var arquivo = require('fs');
var url = require('url');

var server = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<h1>Hello Worldsdsd!</h1>");
	response.write("<br>");	
	response.write("<h3>Aulas NodeJS</h3>");	

	var txt = arquivo.createWriteStream('./arquivos/logs.txt', {flags: 'a'});
	txt.write(request.url+'\n');

	var result = url.parse(request.url);

	console.log(result.host);
	console.log(result.port);
	
	response.end();		
});

server.listen(3000, function(){
	console.log('Servidor está rodando!');	
});