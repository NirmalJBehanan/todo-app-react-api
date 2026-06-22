import React, { useState } from 'react'

const Todocard = ({ todo, dispatch,updateTodo,editTodo,deleteTodo }) => {
    const [isedit, setisedit] = useState(false);
    const [input1, setinput1] = useState(todo.todoName);
    const [input2, setinput2] = useState(todo.todoDesc);
    const handleupdate = () => {
      
       editTodo({
            newName:input1,
            newDesc:input2,
            todoId:todo.id
        })

        // dispatch({
        //     type:"EDIT_TODO",
        //     payload:{
        //         newName:input1,
        //         newDesc:input2,
        //         todoId:todo.id
        //     }
        // })
        setisedit(false);
    }
    return (
        <div className='todo-container'>

            {
                isedit ?
                    (
                        <>
                         <div className='update-inputs'>
                            <h3>Name:</h3>
                            <input type="text" value={input1} onChange={(e)=>(setinput1(e.target.value))}/>
                            
                            <p>Description:</p>
                            <input type="text" value={input2} onChange={(e)=>(setinput2(e.target.value))}/>
                        </div>
                        </>
                    )
                    :
                    (
                        <>
                            <h3>Name:{todo.todoName}</h3>
                            <p>Description:{todo.todoDesc}</p>

                        </>
                    )
            }
            <div>
                <label>Status Filter :</label>
                <select value={todo.status} onChange={(e) => {
                    // dispatch({
                    // type:"UPDATE_STATUS",
                    // payload: {
                    //     todoStatus:e.target.value,
                    //     todoId:todo.id
                    // }})
                    
                    updateTodo({
                        todoStatus:e.target.value,
                        todoId:todo.id
                    })

                    }}>
                    <option  value={"Completed"}>Completed</option>
                    <option  value={"Not Completed"}>Not Completed</option>
                </select>
                {
                    isedit && <button className='update' onClick={handleupdate}>update</button>
                }
            </div>
            <div className='btn-1'>
                <button className='buttonedit' onClick={() => setisedit(true)}>Edit</button>
                <button  className='buttondelete' onClick={() => 
                    {
                        // dispatch(
                        //     {
                        //         type:"DELETE_TODO",
                        //         payload:todo.id
                        //     }
                        // )

                        deleteTodo({
                            todoId:todo.id
                        })
                    }
                }>Delete</button>
            </div>
        </div>
    )
}

export default Todocard