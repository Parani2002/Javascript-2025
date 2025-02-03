
let salaries = [1000,2000,3000,4000,5000,6000,7000,8000,9000,10000,11000,12000];
const displaySalaryInfo = () => {
    let totalSalary = 0;
    let taxAmount = 0;
    salaries.forEach(salary => {
        totalSalary = totalSalary +  salary;
    })
    totalSalary >= 500000 ? taxAmount = totalSalary * 0.2 : taxAmount = totalSalary * 0.15;
    const netSalary = totalSalary - taxAmount;
    console.log(`Total Salary : ${totalSalary}`);
    console.log(`Tax Amount : ${taxAmount}`);
    console.log(`Net Salary : ${netSalary}`);
}

displaySalaryInfo();