console.log('Welcome to node js');
// {
//     const a = 10;
// }
// console.log(a);

// {
//     let x = 20;
// }
// console.log(x);

{
    var y = 30;
}
console.log(y);

const name = 'John';

// var x = 10;
// var x = 20;

// function add(){
//     var x = 30;
//     console.log(x);
// }
// console.log(x);

// const a = 10;
// const a = 20;

// confirm("Parani")
var outside = "I am outsideeee";

//lexical scoping
function outerFunction(){
    var outer = "I am outside!";
    function innerFunction(){
        var inner = "I am inside!";
        console.log(outer);
        console.log(inner);
    }
    innerFunction();
    console.log(outer);
    //console.log(inner);
}

outerFunction();

//Remember that lexical scope means definition space — not invocation space.

const printName = function(){
    const fullname = "Paranitharan Suntharalingam within the function"; //variable definition
    console.log(fullname); //variable usage
    
}

const fullname = "Paranitharan"; //it is global scope but it is called inside function.
const printFullname = function(){
    console.log(fullname); 
}

console.log(fullname); // it is lexical scope because it is called outside the function.global scope.

printName();
printFullname();

