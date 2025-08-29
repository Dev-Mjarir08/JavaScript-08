//Salary slip 

let bs , hra ,ca ,ma , sa , gs ;

    bs=25200;//basic salary
    hra=9408;//house rent allowence
    ca=1493;//conveyance allowence
    ma=1167//medical allowence
    sa=18732//special allowence
    gs= bs + hra + ca + ma + sa;//gross salary

    let epf , Hi , pt , tds; //salary deduction states

    epf=1800;
    Hi=500;//health insourance
    pt=200;//professional tax
    tds= epf - Hi - pt; // tax deduction formula

    console.log("---------------Salary Slip-----------------")
    console.log("Name : Jarir Multani")
    console.log("Basic Salary : " + bs);
    console.log("House Rent Allowence : " + hra); 
    console.log("Conveyance Allowence : " + ca);
    console.log("Conveyance Allowence : " + ma);
    console.log("Special Allowence : " + sa);
    console.log("-------------------------------------")
    console.log("Gross Salary : " + gs);

    //salary deduction states
    console.log("-----------------EPF---------------")//Employes Provident funds
    console.log("EPF : " + epf);
    console.log("Health Insourance : " + Hi);
    console.log("Professional Tax : " + pt);
    console.log("Tax Deductions :" + tds)
