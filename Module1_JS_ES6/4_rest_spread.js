//  Tham số rest -> linh hoạt trong việc sử dụng hàm
const sumNumbers = (a,b,c) => a + b + c;

const sumNumbersWithRestParam = (...numbers) => {
    let total = 0;
    for(const item of numbers) {
        total += item;
    }
    return total;
}

// Viêt tối ưu hơn 
const sumNumbersWithRestParam1 = (...numbers) => numbers.reduce((total,item) => total+item,0);

console.log(sumNumbers(10, 20, 30));
console.log(sumNumbersWithRestParam([1,2,3,4,5,6,7,8]));
console.log(sumNumbersWithRestParam1(3,5,7,-10));

// Toán tử spread -> giải nén một mảng array hoặc đối tượng object thành các phần tử riêng biệt
// ứng dụng : trải các phần tử của mảng (đơn, mảng đối tượng, mảng complex)
const name1 =["Đạt", "Hồng", "Lan"];
const name2 =["Cúc","Mai"];
const name = [...name1, ...name2];
console.log(name);

const revenew =[1000,3000, 1200,4000];
const total_revenue = sumNumbersWithRestParam1(...revenew);
console.log(`Total revenue: ${total_revenue}`);

// Toán tử spread làm việc trong object
const student1 = {id:1, name:"Đạt", age:20}; // đối tượng ẩn object anolymous 
const student2 = {id:2, name:"Hồng", age:19};

// Gộp thành 2 object thành 1 obhect mới
const students = {...student1,...student2}; // do 2 đối tượng có các thuộc tính giống nhau nên sẽ bị ghi đè bởi student2
console.log(students);

// Toán tử spread làm việc trong object
const studentInformation = {id:1, name:"Đạt", age:20}; // đối tượng ẩn object anolymous 
const studentScores = {course1: 9.5, course2: 8.0, course3: 7.5};

const studentProfile = {...studentInformation, ...studentScores}; // gộp 2 object thành 1 object mới
console.log(studentProfile);

// Cập nhật thông tin mới cho sinh viên
 const newStudentInfor = {...studentInformation, age:22, name:"Đạt Nguyễn"};
console.log(newStudentInfor);
