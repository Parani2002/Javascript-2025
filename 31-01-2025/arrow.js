const printName = () => console.log("Suntharalingam Paranitharan");


const printFullname = (fname,lname) => {
    console.log(`My Fullname is : ${fname} ${lname}`);
    
}

printName();
printFullname("Suntharalingam","Paranitharan");

const sumAll = (...x) => {
    let count = 0;
    for (let i = 0; i < x.length; i++) {
        count = count + x[i];
    }
    return count;
}
console.log(sumAll(1,2,3,4,5,6,7,8,9,10));

const sum = (x,y) => x+y;

const substract = (x,y) => x-y;



