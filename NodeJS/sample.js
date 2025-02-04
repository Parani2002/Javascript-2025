const http = require('http');

http.createServer((req,res) => {
    res.write("Paranitharan");
    res.end();
}).listen(8000);