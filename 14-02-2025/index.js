function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function calc(a,b,func){
    let value = func(a,b);
    console.log(value);
    
}

calc(10,20,add);
calc(200,100,sub);

setTimeout(() => console.log("This is settimeout function"),3000);

setTimeout(() => console.log("jifiur4hgfuirt4g"),5000);
