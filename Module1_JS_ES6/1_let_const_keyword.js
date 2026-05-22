// Từ khóa let, const sử dụng để khai báo biến (biến đơn, biến đối tượng, biến mảng danh sách)
let name = "Nguyễn Tiến Đạt"; // có thể kết thúc dấu ; hoặc không 
const age = 20; // Mãi mãi tuổi 20 
let phone; // Gía trị mặc đi luôn là underfined khi không khởi tạo giá trị cho nó 
const gender = true; // Lỗi do biến sử dụng từ khóa ocnsst -> bắt buộc phải khởi tạo giá trị tại thời điểm khai báo
// Đối với js không cần quan tâm kiểu dữ liệu nhưng phải khởi tạo ban đầu
// gõ tắt console log bằng cách gõ log rồi enter là xong , lệnh là để in ra

// Thay đổi giá trị của name, age CHỐT LẠI là let được thay đổi giá trị const không thay đổi được giá trị
name ="Nguyễn Bình";
console.log(name);
console.log(age);
console.log(phone);
console.log(gender);

// Phạm vi sử dụng
// var : phạm vi toàn cục 
// let, const : phạm vi trong khối {} mà nó được khai báo 
// nó sẽ compplie trước nên nó dừng luôn
// var làm phá vỡ đi biến cục bộ
function blockScopeTesting() {
    let x = 10;

    if(true) {
        var y = 20;
        console.log(x);
        console.log(y);
    }
    console.log(x + y);  // nếu để là let thì lỗi truy cập biến y còn var thì phá vỡ
}
blockScopeTesting();