var fs = require("fs");
var fileContent = fs.readFileSync("content.txt","utf-8");
console.log(fileContent)