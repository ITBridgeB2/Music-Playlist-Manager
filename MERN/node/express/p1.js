var express = require("express")
var app = express();
app.get('/',function(requesr,response){
    response.send("hello guest")
});
app.get('/admin',function (request,response){
    response.statusCode = 204;
    response.send("hello citizens");
});
app.get('/videos',function (request,response){
    response.statusCode = 200;
    response.send("hello ");
});
app.listen(9090);
console.log("server started on port : 9090");