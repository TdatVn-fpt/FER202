// Hàm với tham số có giá trị mặc định 
function display1(name = "Đạt", age= 19){
    console.log(`${name} - ${age}`);
}
display1();
display1("Hồng", 18);

const printInfo = (name="Dell Laptop", price= 1000) => console.log(`${name}, ${price}`);
printInfo();
printInfo("SamSung Note", 1200);

const printInfor1 = (name="Iphone 18 Pro Max", price= 3000) => console.log(`${name}, ${price}`);
printInfor1();
printInfor1("Macbook Pro 2024", 2500);
