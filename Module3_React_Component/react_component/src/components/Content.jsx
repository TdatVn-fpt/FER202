import React from 'react';
import Left from '../components/left';
import Main from '../components/Main';
import Right from '../components/Right';
// Định nghĩa class Content kế thừa từ React.Component
class Content extends React.Component {
    //Ghi đè hàm render để trả về nội dung của component
    render() { 
        // Gỉa về dữ liệu được trả về từ back-end BÊN TRONG REDER TRƯỚC KHI RETURN
        const course = [
            "ReactJS", "NodeJS", "MongDB", "ExpressJS", "Angular", "Vue"
        ]
        return (
            <div className='row'>

                {/* Gọi Left component */}
                <Left />
                {/* Gọi Main component */}
                <Main title="List of course" data={course} />
                {/* Gọi Right component */}
                <Right />
            </div>
        )
    }
}

// Xuất component Content để có thể sử dụng ở các component khác, chữ cái đầu tiên viết hoa để React nhận diện đây là một component
export default Content;