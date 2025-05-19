//app.js file
function display()
{
console.log("hello world")
}
function addNumbers(num1, num2){
 console.log("sum of two numbers are : "+(num1+num2));

}
var sayGreetings = function(){
    console.log("good morning")
}
function callFunction(hello){
               hello();
}
//way 1 of calling functions
display();
addNumbers(11,99);
sayGreetings();
//way 2 of calling functions
callFunction(sayGreetings);