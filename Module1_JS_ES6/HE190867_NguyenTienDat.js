const companyData = {
  departments: [
    {
      id: "d1",
      name: "Phòng Công Nghệ",
      manager: "Nguyễn Văn A",
      subDepartments: [
        {
          id: "d1-1",
          name: "Tổ Web",
          employees: [
            { id: "e1", name: "Trần Trần B", salary: 1500 },
            { id: "e2", name: "Lê Văn C", salary: 1800 }
          ]
        },
        {
          id: "d1-2",
          name: "Tổ Mobile",
          employees: [
            { id: "e3", name: "Phạm Thị D", salary: 2000 }
          ]
        }
      ]
    },
    {
      id: "d2",
      name: "Phòng Marketing",
      manager: "Hoàng Thị E",
      subDepartments: [
        {
          id: "d2-1",
          name: "Tổ Media",
          employees: [
            { id: "e4", name: "Đỗ Văn F", salary: 1200 }
          ]
        }
      ]
    }
  ]
};

// Câu 1: Hãy viết một hàm printAllEmployees(data) để duyệt qua toàn bộ dữ liệu và in ra màn hình (console)
// Danh sách tất cả nhân viên trong công ty theo định dạng: [Tên nhân viên] - Lương: [Số lương].
// Viết code tại đây:

// Câu 1: Hãy viết một hàm printAllEmployees(data) để duyệt qua toàn bộ dữ liệu và in ra màn hình (console)

const printAllEmployees = (data) => {
    data.departments.forEach(department => {
        department.subDepartments.forEach(subDept => {
            subDept.employees.forEach(employee => {
                console.log(`${employee.name} - Lương: ${employee.salary}`);
            });
        });
    });
};


// Kiểm thử:
console.log("--- KIỂM THỬ CÂU 1 ---");
printAllEmployees(companyData);

/* Kết quả mong đợi in ra màn hình:
Trần Trần B - Lương: 1500
Lê Văn C - Lương: 1800
Phạm Thị D - Lương: 2000
Đỗ Văn F - Lương: 1200
*/

// Câu 2: Viết một hàm findAndPrintEmployeeById(data, employeeId) để tìm kiếm một nhân viên theo mã id. 
// Nếu tìm thấy, in ra toàn bộ thông tin của nhân viên đó. 
// Nếu không tìm thấy, in ra thông báo "Không tìm thấy nhân viên với ID này".
// Viết code tại đây:
function findAndPrintEmployeeById(data, employeeId) {
    for (const department of data.departments) {
        for (const subDept of department.subDepartments) {
            const employee = subDept.employees.find(emp => emp.id === employeeId);
            if (employee) {
                console.log("Tìm thấy nhân viên:", employee);
                return;
            }
        }
    }
    console.log("Không tìm thấy nhân viên với ID này");
}

  

console.log("\n--- KIỂM THỬ CÂU 2 ---");
// Trường hợp thành công: Tìm nhân viên Phạm Thị D (id: "e3")
console.log("Test case 1 (Có tồn tại):");
findAndPrintEmployeeById(companyData, "e3");
// Kết quả mong đợi: Tìm thấy nhân viên: { id: 'e3', name: 'Phạm Thị D', salary: 2000 }

// Trường hợp thất bại: Tìm nhân viên không tồn tại (id: "e99")
console.log("\nTest case 2 (Không tồn tại):");
findAndPrintEmployeeById(companyData, "e99");
// Kết quả mong đợi: Không tìm thấy nhân viên với ID này


// Câu 3: Viết một hàm updateEmployeeSalaryAndMove(data, employeeId, newSalary, targetSubDeptId) 
// thực hiện đồng thời các nhiệm vụ sau dựa trên employeeId được truyền vào:
// 1. Cập nhật mức lương mới (newSalary) cho nhân viên đó.
// 2. Di chuyển nhân viên đó (Xóa khỏi tổ cũ, thêm vào tổ mới) sang tổ mới có id là targetSubDeptId.
// 3. Hàm trả về true nếu cập nhật thành công, trả về false nếu không tìm thấy nhân viên hoặc không 
// tìm thấy tổ mới để chuyển đến.
// Viết code tại đây:



// Chạy thử hàm: Chuyển nhân viên 'e1' (Trần Trần B từ Tổ Web) sang 'd1-2' (Tổ Mobile) và tăng lương lên 2500
const isSuccess = updateEmployeeSalaryAndMove(companyData, "e1", 2500, "d1-2");

console.log("Cập nhật thành công?:", isSuccess); 
// Kết quả: true

console.log("Kiểm tra lại dữ liệu cấu trúc Tổ Mobile (d1-2):", companyData.departments[0].subDepartments[1]);
/* Kết quả log cấu trúc mới:
{
  id: 'd1-2',
  name: 'Tổ Mobile',
  employees: [
    { id: 'e3', name: 'Phạm Thị D', salary: 2000 },
    { id: 'e1', name: 'Trần Trần B', salary: 2500 } // Đã được cập nhật lương và chuyển sang đây
  ]
}
*/