// Định nghĩa hàm theo phương pháp truyền thống
function sumNumber(a, b) {
    return a + b;
}
console.log("Sum Number: " + sumNumber(10,20));

// Định nghĩa hàm: Sử dụng cú pháp lamda expression(Hàm mũi tên)
// Hàm có 2 tham số và trả về 1 giá trị 
const sumNumber1 = (a, b) => a + b;  // sumNumber1 đang tham chiêu tới kết quả của hàm này 
console.log(sumNumber1(5, 7));
// Các phương pháp khác nhau hàm có 2 tham số và không có có giá trị trả về
const sumNumber2 =  (a, b) => console.log( a + b);
sumNumber2(2,3);

// Tính giá trị tb của 2 số . Tăng giá trị cho mỗi số lên 10 đơn vị trước khi thực hiện , hơn 1 câu lệnh bắt buộc phải scope
// Hàm có tham số và có giá trị trả về
const avgNumbers = (a, b) => {
  a += 10;
  b += 10;
  return ((a + b) /2).toFixed(2); // làm tròn đến 2 chữ số thập phân
}
console.log("Average two number: " + avgNumbers(4, 10));
// Hàm mũi tên có 1 tham số đúng quy chuẩn là (name) nhưng 1 tham số thì không cần
const displayName = name => console.log("Product name is: " + name);
displayName("Iphone 18 pro max");

// Hàm mũi tên không có tham số bắt buộc phải có đóng mở ngoặc
const showInfor = () => {
    let name = "Tom";
    let age = 20;
    let gender = 'Male';  // trong js '' và "" giống nhau

    console.log(`Name : ${name}, Age : ${age}, Gender: ${gender}`);  // nháy cạnh số 1 gọi là string interpolution
  
  }
    
    showInfor();