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

const add = (a,b) => {
    return a+b;
}
const substract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}   
const divide = (a,b) => {
    return a/b;
}
const power = (a,b) => {
    return Math.pow(a,b);
}

module.exports = {add, substract, multiply, divide, power};


