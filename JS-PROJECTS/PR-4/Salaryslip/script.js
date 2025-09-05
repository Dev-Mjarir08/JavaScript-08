//salary slip generator
let empName = document.querySelector("#employeeName");
let empId = document.querySelector("#employeeId");
let basicSalary = document.querySelector("#basicSalary");
let hra = document.querySelector("#hra");
let allowances = document.querySelector("#allowances");
let deductions = document.querySelector("#deductions");
let salaryForm = document.querySelector("#salaryForm");
let salarySlip = document.querySelector("#salarySlip");

let generateSlip = () => {
    let e_name = empName.value;
    let e_id = empId.value;
    let basic = parseFloat(basicSalary.value);
    let houseRent = parseFloat(hra.value);
    let allow = parseFloat(allowances.value);
    let deduct = parseFloat(deductions.value);

    let grossSalary = basic + houseRent + allow;
    let netSalary = grossSalary - deduct;

    document.querySelector("#slipEmployeeName").innerText = e_name;
    document.querySelector("#slipEmployeeId").innerText = e_id;
    document.querySelector("#slipBasicSalary").innerText = basic;
    document.querySelector("#slipHRA").innerText = houseRent;
    document.querySelector("#slipAllowances").innerText = allow;
    document.querySelector("#slipDeductions").innerText = deduct;
    document.querySelector("#slipNetSalary").innerText = netSalary;

 document.querySelector("#salarySlip").classList.remove("d-none");
    return false; 
}

