var http = require('http'); 
var fs = require('fs');
 


var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    if(req.url === '/home' || req.url ==='/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/index.html').pipe(res);
        
    } else if(req.url ==='/contact'){
          res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/contact.html').pipe(res);
    } else if(req.url === '/api/ninjas'){
        var ninjas =[{name: 'Ryu', age: 29},{name: 'yoshi', age:32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else  res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname +'/404.html').pipe(res);
        
// res.writeHead(200, {'Content-Type': 'text/plain'});
// res.end('feed me popcorn');
 });
 
 
 

//server.listen(3000, '127.0.0.1');
//console.log('yo dawgs, now listening to port 3000');


 server.listen(process.env.PORT, process.env.IP);
 console.log('yo dawgs, now listening to port 3000');
