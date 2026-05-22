class Employee {
    // Hàm khởi tạo đối tượng và gán giá trị cho các thuộc tính của đối tượng
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    // hàm xử lý in thông tin của 1 nhân viên
    printEmployee() {
        console.log(`${this.id}\t${this.name}\t${this.salary}`);
        
    }
}

// Tạo một danh sách chứa các đối tượng kiểu employees
const employeeList = []

// Khởi tạo các đối tượng kiểu Employees -> thêm vào danh sách employlist
const emp1 = new Employee(1,"Tom", 2000)
const emp2 = new Employee(2,"Mary", 4000)
const emp3 = new Employee(3,"David", 2500)

employeeList.push(emp1)
employeeList.push(emp2)
employeeList.push(emp3)

//in danh sách các employees
employeeList.forEach(emp => emp.printEmployee())