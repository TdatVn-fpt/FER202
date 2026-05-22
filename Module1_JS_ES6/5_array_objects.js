// Array <=> List ( Complex types)
const price = [10,5,20,35];
const list =[1, "Macbook Pro",1500.5, true];

// Hành vi làm việc trên mảng 
// 1.Thêm phần tử vào mảng
price[1] = 15; // thay thế phần tử tại vị trí index 1
price.push(100); // thêm phần tử vào cuối mảng
console.log(price);

//2. Xóa phần tử khỏi mảng
const poppedItem = price.pop(); // xóa phần tử cuối cùng của mảng và trả về phần tử đã xóa
console.log(poppedItem);
console.log(price);

// 3. Duyệt từng phần tử trong mảng
// PP1 : sử dụng vòng lập ( for, while, do while, for each)
console.log("List of price:(using for loop) ");

for(let index = 0; index < price.length; index++) {
    console.log(price[index]);
}

//PP2 : sử dụng phương thức forEach() -> cung cấp một hàm callback để thực hiện một hành động cụ thể trên mỗi phần tử của mảng
console.log("List of price:(using forEach method) ");
// hàm này thanh số 'item' sẽ có giá trị là giá trị của phần tử đang duyệt
price.forEach((item) => console.log(item)); // mỗi khi duyệt qua từng phần tử trong price sẽ gọi 1 hàm callback và truyền phần tử đó vào tham số item của hàm callback

//PP3 : sử dụng map() -> tạo ra một mảng mới bằng cách áp dụng một hàm cho mỗi phần tử của mảng gốc
console.log("List of price( using map(): ");
price.map((value, index) => console.log(`#${index} - ${value}`));

// Tạo ra mảng mới dùng map , ? là có dữ liệu hoặc không 
const newPrices = price?.map(item => item + 2 );
console.log(newPrices);

console.log(price);

 // Tạo mảng mới từ mảng price ban đầu với các phần tử có giá trị chẵn thì tăng lên 2 
 // in mảng mới ra
const newPrices1 = price?.map(item => item % 2 === 0 ? item + 2 : item);
console.log(newPrices1);


// 4.Duyệt các phần tử và lọc theo 1 điều kiện nào đó -> sử dụng phương thức filter() -> tạo ra một mảng mới chứa các phần
const fiterPrice = price?.filter(item => item % 2 === 0);
console.log(fiterPrice);

//JS Object
const product = {id:1, name:"Mouse", price:10};
// 1. Truy xuất tới thuộc tính của đối tượng
console.log(`Name: ${product.name}`);
console.log(`Price: ${product.price}`);
console.log(`Id: ${product.id}`);

console.log(`${product.id} - ${product.name} - ${product.price}`);

// 2.Bổ sung thêm thuộc tính mới cho đối tượng
product.category = "Electronics";
console.log(product);
//Tạo 1 đối tượng mới với các thuộc tính từ product ban đầu + các thuộc tính mới
const newProduct = {...product, brand:"Logitech", supperlier:"FPT SHOP"};
console.log(newProduct);


// Cập nhật dữ liệu của product
newProduct.supperlier = "Techcom";
console.log(newProduct);

// Mảng của đối tượng
const employees =[
    {id:1,
     name:"Đạt",
      gender:true,
       dependents: [
        {
            "id": 1,
            "name": "Bảo"
        },
        {
            "id": 2,
            "name": "Lan"
        }
    ]},
    // shirt + alt xuống
    {id:2,  
     name:"Chi",
      gender:false,
       dependents: [
        {
            "id": 1,
            "name": "Minh"
        },
        {
            "id": 2,
            "name": "Khôi"
        }
    ]},
    
]
// In ra list of employee
const tableData = employees.map(employee => ({
    Id: employee.id,
    Name: employee.name,
    Gender: employee.gender ? "Male" : "Female",
    Dependents: employee.dependents
                    .map(d => d.name)
                    .join(", ")
}));

console.table(tableData);