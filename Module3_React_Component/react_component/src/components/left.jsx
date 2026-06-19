import React from "react";
// sử dụng class định nghĩa component -> Hiểu vòng đời của 1 component : Init ->Mounting -> Updating -> Unmounting
class left extends React.Component {
  //Giai đoạn khởi tạo Init :Khởi tạo các thuộc tính và trạng thái dữ liệu cảu biến ban đầu
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // console.log("1:Initi");

    //cách 1 : Khai báo 2 hàm ngiệp vụ sẽ sử dụng bind trong constructor trong class
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }
  //Hàm nghiệp vụ xử lý tăng (giảm) giá trị count
  //cách 2: dùng hàm mũi tên để định nghĩa hàm sẽ tự động bind this cho hàm đó, không cần phải bind trong constructor
  // increment =() =>
  increment = () =>
    this.setState((preState) => ({ count: preState.count + 1 })); // setState làm hàm update lại dữ liệu cho state của component

  decrement = () =>
    this.setState((preState) => ({ count: preState.count - 1 }));

  // Giai đoạn Mounting : Khi component được tạo ra và hiển thị trên giao diện người dùng

  render() {
  //  console.log("2.1:Mounting:call Render");
    return (
      // cách 3: dùng hàm mũi tên trực tiếp trong sự kiện onClick, tuy nhiên cách này sẽ tạo ra một hàm mới mỗi khi render nên không được khuyến khích sử dụng
      // <button onClick= {() => this.increment()}>Increment</button>
      <div className="col">
        <div>Count: {this.state.count}</div>
        <div>
          <button onClick={this.increment}>Increment</button>

          <button onClick={this.decrement}>Decrement</button>
        </div>
      </div>
    );
  }

  // các hàm componentDidMount, componentDidUpdate và componentWillUnmount là các phương thức vòng đời của React được gọi tự động bởi React khi một component được tạo ra, cập nhật hoặc bị hủy bỏ khỏi DOM.
  componentDidMount() {
  //  console.log("2.2Mounting:call componentDidMouting");
  }
  componentDidUpdate(){
   // console.log("3:Updation: After states change , call componentDidUpdate");
  }
    componentWillUnmount(){
     //   console.log("4:Will Unmounting: call componentWillUnmount when component is removed from the DOM");
    }

}
export default left;
