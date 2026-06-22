import React, { useState } from 'react'
import "../App.css"
const Header = ({ dispatch,addtodo}) => {

    const [input1, setinput1] = useState("");
    const [input2, setinput2] = useState("");
    const add = () => {
             

       addtodo({
         name:input1,
         desc:input2
       })
   

        // dispatch({
        //     type:"ADD_TODO",
        //     payload:{
        //         name:input1,
        //         desc:input2
        //     }
        // })

        setinput1("");
        setinput2("");
    }
    return (
        <div className='header'>
            <h1>My Todo</h1>
            <p>Organize the tasks and get things done</p>
            <div className='todo-add'>
            <input placeholder='Todo Name' value={input1} type='text' onChange={(e) => (setinput1(e.target.value))} />
            <input placeholder='Todo Description' value={input2} type='text' onChange={(e) => (setinput2(e.target.value))} />
            <button onClick={add}>Add Todo</button>
            </div>
        </div>
    )
}

export default Header