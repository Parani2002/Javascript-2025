//array holds mixed data types.
let arr = new Array(5);
arr[0] = 10;
arr[1] = "Parani";
arr[2] = true;
arr[3] = null;
arr[4] = undefined;
console.log(arr);

//method2
let arr1 = [10,"Parani",true,null,undefined];
console.log(typeof arr1); //object
//In php this array is called index array.

for (let index = 0; index < arr1.length; index++) {
    const element = arr1[index];
    console.log(element);  
}


const obj = {
    name:"Parani",
    age:20,
    city:"Jaffna"
};
console.log(obj);
console.log(typeof obj); //object
//In php this array is called associative array which is key value pair.

let result = Array.isArray(arr1);
console.log(result); //true

