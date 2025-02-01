const {display, add} = require('./index')

// console.log(x());


// function sumAll(x,y){
//     var z = x;
//     let count = 0 ;
//     for (let x = z; x <= y; x++) {
//         count = count+  x; 
//         console.log(count);
          
//     }
//     return count;
// }

// console.log(sumAll(1,10));

// console.log(add(12,22));

// const add = (a,b) => {
//     return a+b;
// }
// const substract = (a,b) => {
//     return a-b;
// }
// const multiply = (a,b) => {
//     return a*b;
// }   
// const divide = (a,b) => {
//     return a/b;
// }
// const power = (a,b) => {
//     return Math.pow(a,b);
// }

// module.exports = {add, substract, multiply, divide, power};


// for(let i = 0; i < 10; i++){
//    if(i === 3) break;
//     console.log(i);
// };
// console.log(a);
// console.log(b);

var a = 10;
var b ;


const ages1 = [20,30,40];
const ages2 = [...ages1,50,60,70];

console.log(ages1);
console.log(ages2);

const person = {
    name:"Parani",
}

const person1 = {
    ...person,
    age:20,
    city:"Jaffna"
}
console.log(person1);





