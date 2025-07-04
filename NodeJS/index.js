console.log("Welcome to NodeJS");

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(url === '/'){    
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Enter details</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><input type="submit" value="Send"/></form></body>');
        res.write('</html>');
        return res.end();
        
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
       req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
       });
       //when request sends all chunk data.
       req.on('end',() => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody);
        const message = parsedBody.split('=')[1];
        fs.writeFileSync('message.txt',message);
        fs.writeFileSync('message.txt','DUMMY');
        res.setHeader('Location','/');
        res.statusCode = 302;
       })
       return res.end();
     
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>About Page</h1></body>');
        res.write('</html>');
        res.end();
    
      
});
server.listen(8000);
