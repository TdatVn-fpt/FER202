import React from 'react';
// Định nghĩa class Content kế thừa từ React.Component
class Content extends React.Component {
    //Ghi đè hàm render để trả về nội dung của component
    render() {
        return (
            <div className='row'>
                Welcome: Content component
                {/* Gọi Left component */}

                {/* Gọi Main component */}
                 <Main />
                {/* Gọi Right component */}

            </div>
        )
    }
}

// Xuất component Content để có thể sử dụng ở các component khác, chữ cái đầu tiên viết hoa để React nhận diện đây là một component
export default Content;