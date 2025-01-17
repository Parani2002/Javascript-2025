console.log("euhdiuegidu");
const name = "paranitharan";

var Createcounter = function(n){
    return function(){
        return n++
    }
}

const counter = Createcounter(20);
console.log(typeof(counter));

console.log(counter());
console.log(counter());
console.log(counter());

var createCounter = function(n){
    return function increment(){
        return ++n;
    }
    return function  decrement(){
        return --n;
    }
    return function reset(){
        return init;
    }
}
const x = createCounter(10);
console.log(x.increment)

const names = ["parani","suntharam","mano"];
names.forEach(element => {
    console.log(element);
    
});

const person = {
    firstname:"Paranitharan",
    lastname:"Suntharalingam",
    age:20,
    address:{
        addLine1:"Sabapathy Road",
        city:"Jaffna",

    }
}
console.log(person.firstname);
console.log(person.lastname);
console.log(person.address.city);








