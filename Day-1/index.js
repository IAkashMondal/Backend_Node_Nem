const http = require("http"); // http: handel Req & respons
const fs = require("fs");


// crete a new File----------------------------------------->
fs.writeFileSync("creating_a_new_file.txt","server runing");
// to check directory & file name--------------------------->
console.log(__dirname,__filename);

// create Basics server----------------------------------->
http.createServer((req,res)=>{
    res.write("<h1>1st server</h1>");
    res.end();
}).listen(8080);

