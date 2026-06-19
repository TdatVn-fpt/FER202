import React, { useEffect, useState } from 'react';
import Todo from './Todo';
// Định nghĩa component đặt tên là Main hoặc sử dụng cú phpas của function
function Main(props) {
    const { title, data } = props;
    // Khai báo 1 state đặt tên là : courses với dữ liệu ban đầu lấy từ props.data
    const [courses, setCourses] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    useEffect(() => {
        if (searchKey.length === 0) {
            setCourses(data);
        } else {
           setCourses(data?.filter(c => c.toLowerCase().includes(searchKey.toLowerCase())));
        }
    }, [searchKey, data]);


    return (
        <div className='col-12 col-md-6 col-lg-8'>
            <h3>{title}</h3>
            <div></div>
            <input type="text" placeholder="Enter course title for search..."
                onChange={(e) => setSearchKey(e.target.value)} />


            <div />
            <ul>
                {courses?.map((c, index) => <li key={index}>{c}</li>)}
            </ul>
            <Todo />
        </div>
    )
}
export default Main;