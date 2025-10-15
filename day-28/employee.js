class Employee {
    constructor(name, age, id, email) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.email = email;
    }

    getDetails() {
        return `Name: ${this.name},\nAge: ${this.age},\nID: ${this.id},\nEmail: ${this.email}`;

    }
}

class empSalarydetails extends Employee {
    constructor(name, age, id, email, baseSalary, hra, diwaliBonus, bonusPercentage, totalSalary) {
        super(name, age, id, email);
        this.baseSalary = baseSalary;
        this.bonusPercentage = bonusPercentage;
        this.hra = hra;
        this.diwaliBonus = diwaliBonus;
        this.totalSalary = totalSalary;
    }
    calculateSalary() {
        const bonus = this.baseSalary * (this.bonusPercentage / 100);
        const totalSalary = this.baseSalary + bonus + this.hra + this.diwaliBonus;
        return this.baseSalary + bonus + this.hra + this.diwaliBonus;
    }
    displaySalaryDetails() {
        return `Base Salary: ${this.baseSalary},\nHRA: ${this.hra},\nDiwali Bonus: ${this.diwaliBonus},\nTotal Salary: ${this.calculateSalary()}`;
    }
}


const employee1 = new Employee('Jarir', 23, `${Date.now()}`, 'jarir@gmail.com');
console.log(employee1.getDetails());

console.log("----------------------------------------------");
console.log("----------------------------------------------");

const empSalary1 = new empSalarydetails('Jarir', 23, `${Date.now()}`, 'jarir@gmail.com', 45000, 2000, 2000, 1000)
console.log(empSalary1.displaySalaryDetails());

