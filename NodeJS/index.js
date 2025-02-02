console.log("Welcome to NodeJS");

const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/'){    
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><h1>Welcome to NodeJS</h1></body>');
        res.write('</html>');
        res.end();
    }else if(url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><h1>About Page</h1></body>');
        res.write('</html>');
        res.end();
    }
      
});
server.listen(8000);
