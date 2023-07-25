const express= require('express');
const app= express();
app.get('/',(req,res)=>{
    res.send("HOME page")
});
app.get('/about',(req,res)=>{
    res.send("abot page");
});
app.listen(8080,(err)=>{
    console.log("server running on 8080")
})