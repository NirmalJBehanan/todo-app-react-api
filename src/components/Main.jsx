import React from 'react'
import "../App.css"
import Todocard from './Todocard'
const Main = ({ card, filter,dispatch,updateTodo,editTodo,deleteTodo}) => {

  return (
    <div className='container'>
      
      <div className='top'>
        <h2>My Todo</h2>
        <div>
          <label>Status Filter :</label>
          <select className='select-1' value={filter} onChange={(e)=>{
            dispatch(
              {
                type:"SET_FILTER",
                payload:e.target.value
              }
            )
          }}>
           
           
            <option value={"all"}>ALL</option>
            <option value={"Completed"}>Completed</option>
            <option value={"Not Completed"}>Not Completed</option>
          </select>
        </div></div>
      <div className='container-2'>
      {


        card.length === 0 ? (
          <div className="empty-state">
            <h1>welcome to todo</h1>
          </div>
        ) :
          (
            <div className='Todocard'>
              {
                card.map((todo) => (
                  <Todocard key={todo.id} todo={todo}   dispatch={dispatch} updateTodo={updateTodo} editTodo={editTodo}  deleteTodo={deleteTodo}/>
                ))
              }
            </div>
          )}
    </div></div>
  )
}

export default Main