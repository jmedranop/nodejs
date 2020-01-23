var http= require("http");
var url = require("url");
var querystring = require("querystring");
var {info,error} = require("./modules/my-log");
var {countries} = require('countries-list');
var server = http.createServer(function(request,response)
{

    var parsed = url.parse(request.url);
    var pathname = parsed.pathname;
    var querys = querystring.parse(parsed.query);
    console.log(querys);
    if(request.url === '/')
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write("<html><body><p>Hola</p></body></html>")
       
        response.end();    
    }
    else if (pathname === '/exit')
    {
        response.writeHead(200, {"Content-type":"text/html"});
        response.write("<html><body><p>Esta página es de salida</p></body></html>")
      
        response.end();
    }
    else if (pathname === '/info')
    {
        var result = info(pathname);
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(result);       
        response.end();
    }
    else if (pathname === '/error')
    {
        var result = error(pathname);
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(result);      
        response.end();
    }
    else if (pathname === '/country')
    {
        
        response.writeHead(200, {"Content-type":"application/json"});
        response.write(JSON.stringify(countries[querys.emoji]));      
        response.end();
    }
    else
    {
        response.writeHead(400, {"Content-type":"text/html"});
        response.write("<html><body><p>Página no encontrada</p></body></html>");        
        response.end();
    }
   
});

server.listen(3030);
console.log("Server Node JS running");