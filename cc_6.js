
// Step 2:
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Step 3:

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages the ${this.department} department and leads a team of ${this.teamSize} employees.`;
    }
}

// Step 4:

const employee1 = new Employee("Spongebob Squarepants", "Operations");
const employee2 = new Employee("Sandy Cheeks", "Human Resources");

const manager1 = new Manager("Patrick Star", "Marketing", 8);
const manager2 = new Manager("Mr. Krabs", "Finance", 15);

// Step 5:

class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        this.employees.forEach(employee => {
             console.log(employee.describe());
        });
    }
}

// Step 6:

const company = new Company();

company.addEmployee(employee1);
company.addEmployee(employee2);
company.addEmployee(manager1);
company.addEmployee(manager2);

company.listEmployees();

