var express=require('express');
var app=express();
var port=3000 || process.env.PORT;
app.get("/",function(req,res){
    res.send("Hello from the backend,Yay");
});
app.listen(port,function(){
    console.log('Server is running');
});