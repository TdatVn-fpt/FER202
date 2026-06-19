import React, { useState, useEffect } from 'react';
//Function component
function Right(props) {
// khai váo 1 state đặt tên là : count
const [count, setCount] = useState(0);
useEffect(()=>{
console.log("Component did mount")

return ()=>{
    console.log("ComponentWillUnMount(),ComponentDidUpdate() or before state change")
}
},[count    ])
return(
    <div className = "col">
        <div>Count: {count}</div>
        <div>
            <button onClick = {()=>setCount(count+1)}>Increment</button>
            <button onClick = {()=>setCount(count-1)}>Decrement</button>
        </div>
    </div>
)
}
export default Right;