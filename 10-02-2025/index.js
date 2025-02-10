// let today = new Date();
// console.log(today.getFullYear());

const firstName = (name,callback) => {
    console.log(`My first name is ${name}`); 
    callback();
}

const lastname = () => {
    console.log("My last name is Suntharalingam");
}

firstName("Paranitharan",lastname);



