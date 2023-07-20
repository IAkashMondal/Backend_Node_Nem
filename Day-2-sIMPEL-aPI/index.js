const http= require("http");

http.createServer((req,res)=>{
    res.writeHead(200,"Content-Type","aplication/json");
    res.write(JSON.stringify({name:"akash",email:"a.2013@gmnaiol.com"}));
    res.end();
}).listen(8081)