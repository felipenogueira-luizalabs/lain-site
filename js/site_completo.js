var fs = require('fs');
var http = require('http');


var server = http.createServer(function(request, response){
	if (request.url == "/artigos"){
		fs.readFile(__dirname + '/../artigos.html', function(err, html){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.write(html);
			response.end();
	});

	}else if(request.url == "/contato"){
		fs.readFile(__dirname + '/../contato.html', function(err, html2){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.write(html2);
			response.end();
	});

	}else{

		fs.readFile(__dirname + '/../erro.html', function(err, html3){
			response.writeHeader(200, {'Content-Type':'text/html'});
			response.write(html3);
			response.end();
	});
	}
});

server.listen(3000, function(){

	console.log("Executando Site Pessoalsss");
});