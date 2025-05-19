var server = require("http");
server.createServer((request,response)=>{
    response.write("hello guest");
    response.end();
}).listen(3090);
console.log("setrver started on port : 3090")




/*server.createServer((request,response)=>{
    response.write("hello guest");
    response.end();

}).listen(portNumber);
console.log("server started on port : "+portNumber)
}
module.exports.start = start;*/