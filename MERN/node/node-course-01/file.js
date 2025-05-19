const fs = require("fs");
//--writing a file
//synchronous method
//fs.writeFileSync("./test.tx","hey there ");
//synchronous method
//fs.writeFileSync("./text.txt","hello there async",(err)=>{})
    //reading a file
    //sync method
    //const result = fs.readFileSync("./text.txt","utf-8");
    //console.log(result);
    //async method
fs.readFile("./text.txt","utf-8",(err,result)=>{
    if(err){
        console.log("error",err)
    }else{
        console.log(result)
    }
})