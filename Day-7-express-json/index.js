const express= require('express');
const app= express();
app.get('/',(req,res)=>{
    res.send("<h1>HOME page</h1>")
});
app.get('/about',(req,res)=>{
    res.send("add your name in query "+"hay "+`${req.query.name}`);
});
app.listen(8080,(err)=>{
    console.log("server running on 8080")
})