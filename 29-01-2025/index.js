(function substract(x,y){
    console.log(x-y);
  })(20,10);
  (function multiply(x,y){
    console.log(x*y);
  })(10,20);
  (function divide(x,y){
    console.log(x/y);
  })(20,2);
  (function power(x,y){
    console.log(x**y);
  })(10,10);


  const addition = function(x,y){
    return x+y;
  }
  const x = addition(100,200);
  console.log(x);


  const substraction = function(x,y){
    return x-y;
  }
  const y = substraction(200,50);
  console.log(y);

  
  const multiplication = function(x,y){
    return x*y;
  }
  const a = multiplication(200,50);
  console.log(a);

  const division = function(x,y){
    return x/y;
  }
  const b = division(200,50);
  console.log(b);

