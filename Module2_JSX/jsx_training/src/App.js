//  Khai báo 1 biến dạng local( toàn cục)
const name = 'Nguyen Tien Dat';
const age = 20;
const students = [
  { id: 1, name: "Dat", score: 10},
  { id: 2, name: "Hieu", score: 9},
  { id: 3, name: "Tuan", score: 8}
];

function App() {
  // Khai báo biến cục bộ -> chỉ sử dụng trong hàm app
  const course = ["FER202","SWP391","SWT301"];
  const isLogin = true;

  return (
    <div style={{ backgroundColor: 'lightgray' }}>
      {!isLogin ? (
        <h3>Vui lòng đăng nhập</h3>
      ) : (
        <div>
          <h1>
            Hello <span style={{ color: "green" }}>{name}</span>
            <br />
            Age: {age + 1}
            <hr />
          </h1>

          {/* CTRL / LÀ CMT CỦA JSX, HIỂN THỊ DANH SÁCH CÁC MÔN HỌC */}
          <h3>Danh sách các môn học kì này</h3>
          <ol>
            {course?.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ol>

          {/* HIỂN THỊ DANH SÁCH HỌC SINH VÀ ĐIỂM SỐ theo định dạng : ID NAME SCORE */}
          <h3>Danh sách học sinh và điểm số:</h3>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {students?.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.name}</td>
                  <td>{s.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
