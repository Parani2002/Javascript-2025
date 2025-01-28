//default function
function myName(){
    let firstName = "Parani";
    let lastName = "Suntharalingam";
    let fullName = `My Fullname is :${firstName} ${lastName}`;
    console.log(fullName);
    console.log("-----------------------------------------------");
    
}
myName();

//parameterized function
function myName(fname){
    let firstName = fname;
    let lastName = "Suntharalingam";
    let fullName = `My Fullname is :${firstName} ${lastName}`;
    console.log(fullName);
    
    console.log("-----------------------------------------------");
    
}
myName("Parani");
myName("Siva");
myName("Saravanan");

//Return function
function myName(fname){
    let firstName = fname;
    let lastName = "Suntharalingam";
    let fullName = `My Fullname is :${firstName} ${lastName}`;
    return fullName;
    
}
console.log(myName("Parani"));

