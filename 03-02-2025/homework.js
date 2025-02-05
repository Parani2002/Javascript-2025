let salaries = []; //declare array to store salaries
//function to get salaries
const getSalaries = function(...args){
    if(args.length == 12){
        args.forEach(salary =>{
            args.push(salary)
        })
        return args;
    }else{
        console.log("Please enter 12 months salary");
        return 0;
        
    }

}
//get salaries
salaries = getSalaries(90000,80000,30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000);
// console.log(salaries);
var date = new Date();
//function to display salary info
const displaySalaryInfo = (name="Paranitharan") => {
    let totalSalary = 0;
    let taxAmount = 0;
    if(salaries.length > 0){
        salaries.forEach(salary => {
            totalSalary = totalSalary +  salary;
        })
        totalSalary >= 500000 ? taxAmount = totalSalary * 0.2 : taxAmount = totalSalary * 0.15;
    const netSalary = totalSalary - taxAmount;
    console.log("*---------Salary Info-----------*");
    console.log(`Employee Name : ${name}`);
    console.log(`Printed Date : ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
    console.log(`1. Total Salary : ${totalSalary}`);
    console.log(`2. Tax Amount : ${taxAmount}`);
    console.log(`3. Net Salary : ${netSalary}`); 

    console.log("---------Salary Info-----------");

    } 
}



displaySalaryInfo();