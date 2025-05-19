var server = require("http");
function start(portNumber){
    function onRequest(request,response){
        response.write("hello guest");
        response.end();
    }
    Http.ServerRequest.createServer(onRequest).listen(portNumber);
    console.log("server (Async) started on port : "+portNumber)
} 
module.exports.start=start;