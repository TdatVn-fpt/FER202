// Destructoring : là một kỹ thuật phân ra( Extra) -> Object , array( list)
// destructuring object

const fullName = {
    lastName: "Nguyễn",
    middleName: "Tiến",
    firstName: "Đạt"
}; // Tiến hành phân rã đối tượng thành các biến riêng biệt
// đồng thời đổi tên biến khi phân rã thành các biến ngắn gọn hơn
const { lastName: lName, middleName: midName, firstName: fName } = fullName;
console.log(`Full name: ${fName} ${midName} ${lName}`);

// Tính áp dụng 
product = {id:1, name:"Product 1", quatity: 100, unitsInStock: 200, UnitOnOder: 50};

// áp dụng kỹ thuật phân rã chỉ lấy ra các thuộc tính cần thiết để sử dụng trong hàm
function showProduct({id, name, quatity,}) {
    console.log(`Product sale: ${id} - ${name} - ${quatity}`);
} 
showProduct(product);

//Kỹ thuật phân rã trong mảng  ( phần lần lượt theo thứ tự từ trái sang phải)
const customerInfo = [1, "Tom",true,"2000/06/28"];
// Phân rã mảng thành các biến riêng biệt
const [cId, cName, gender] = customerInfo;
console.log(`Customers: ${cId}, ${cName}, ${gender==true?"Male":"Female"}`);

// Thực hành
const data = {
    students: [
        {id:1, name:"Đức", dob:"2000/01/01", course: 1, class: 1},
        {id:2, name:"Hồng", dob:"2001/02/02", course: 1, class: 2},
        {id:3, name:"Lan", dob:"2002/03/03", course: 1, class: 3},  
        {id:4, name:"Minh", dob:"2003/04/04", course: 2, class: 1}
    ],
    course:[
        {id:1, title: "FER202", credit: 3},
        {id:2, title:"SDN302", credit: 3},
        {id:3, title:"DBI202", credit: 2}    
    ],
    classes:[
        {id:1, name:"SE2014"},
        {id:2, name:"SE2015"},
        {id:3, name:"SE2016"},
        {id:4, name:"SE2010"}
    ]
};

// const {students, course: courseList, classes: classList} = data;
// // findCourseTitleByID(id) -> return title of course
// const findCourseTitleByID = (id) => {
//     const courseInfo = courseList.find(c => c.id == id);
//     return courseInfo ? courseInfo.title : "Course";
// }
// //findClassNameById(id) -> name
// const findClassNameByID = (id) => {
//     const nameInfor = classList.find(c => c.id == id);
//     return nameInfor ? nameInfor.name : " Class";
// }
// // 3. Traverse: student -> point list student -> course -> class
// students.forEach(student => {
//     const { id, name, course: courseId, class: classId } = student; // phân rã student thành các biến riêng biệt để sử dụng trong hàm forEach
//     console.log(`Student: ${id}\t | Name: ${name}\t | Course: ${findCourseTitleByID(courseId)}\t | Class: ${findClassNameByID(classId)}`);
// });


// // Cách in thứ 2
// const tableData = students?.map(student => ({
//     Id: student.id,
//     Name: student.name,
//     Course: findCourseTitleByID(student.course),
//     class: findClassNameByID(student.class)
// }));

// console.table(tableData);

// // cách in thứ 3 dùng padEnd để căn lề
// students.forEach(student => {
//     const { id, name, course: courseId, class: classId } = student; // phân rã student thành các biến riêng biệt để sử dụng trong hàm forEach
//     console.log(`Student: ${id.toString().padEnd(5)} | Name: ${name.padEnd(10)} | Course: ${findCourseTitleByID(courseId).padEnd(10)} | Class: ${findClassNameByID(classId).padEnd(10)}`);
// });




// Cách của thầy 
// mình đẫ phân ra ở trên rồi 
const { students, course, classes } = data;
// viết hàm xử lý trả về lấy titile của course theo id
function getTitileById(id) {
    const courseResult = course?.find(c => c.id == id)
    if(courseResult === undefined)
        return "No Course"
    return courseResult.title
}
function getClassNameById(id) {
    const resultClass = classes?.find(c => c.id == id)
     if(resultClass === undefined)
        return "No Class"
    return resultClass.name
}

function showStudentList(studentData) {
    console.log("List of students: ");
    studentData?.map(student => {
        const { id, name, course: courseId, class: classId } = student;
        console.log(`${id}\t   ${name}\t  ${getTitileById(courseId)}\t  ${getClassNameById(classId)}`);
    });
}
showStudentList(students);

