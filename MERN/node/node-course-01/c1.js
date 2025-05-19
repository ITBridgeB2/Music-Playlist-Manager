//method 1
const sum = (num1,num2)=>num1+num2;
const sub = (num1,num2)=>num1-num2;
const name = "mukthar";
module.exports = {
    sum,sub,name
}
//method 2
exports.add = (num1,num2)=>num1+num2;
exports.sub = (num1,num2)=>num1-num2;
exports.name ='mukthar';