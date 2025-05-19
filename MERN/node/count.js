//count.js file
var counter = function (arr){
    console.log("there are"+arr.length+"elements")
    for(i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
};
module.exports.counter = counter;
module.exports.addNumbers = function(a,b){
    return `the sum of two numbers is ${a+b}`;
}