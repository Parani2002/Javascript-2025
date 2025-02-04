const http = require('http');

http.createServer((req,res) => {
    try{
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.write("Paranitharan");
        res.write("v     ");
        res.end('okay');
    }catch(error){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.write(error);
    }
    
}).listen(8000, () => {
    console.log("Server is running on port 8000");
});

