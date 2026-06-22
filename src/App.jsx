import React, { useEffect, useReducer, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Reducer from './reducer/Reducer'
import axios from 'axios'
const App = () => {

  const initialState = {
    todos: [],
    filter: "all"
  }
  const [isLoading, setIsLoading] = useState(false)
  const [state, dispatch] = useReducer(Reducer, initialState)
  console.log(state)

  const getTodo = async () => {
    try {
      const response = await axios.get("/todo");
      console.log(response.data);
      dispatch({
        type: "GET_TODO",
        payload: response.data

      })
    }
    catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }

  const addtodo = async (tododata) => {
    const response = await axios.post("/todo",
      {
        todoName: tododata.name,
        todoDesc: tododata.desc,
        status: "Not Completed"
      })
    dispatch({
      type: "ADD_TODO",
      payload: response.data
    })
  }

  const updateTodo = async (todoupdate) => {
    dispatch({
      type: "UPDATE_STATUS",
      payload: {
        todoId: todoupdate.todoId,
        todoStatus: todoupdate.todoStatus
      }
    })
    const response = await axios.put(`/todo/${todoupdate.todoId}`,
      {
        status: todoupdate.todoStatus
      }
    )
  }

  const editTodo = async (todoEdit) => {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        name: todoEdit.newName,
        desc: todoEdit.newDesc,
        todoId: todoEdit.todoId
      }
    })
    await axios.put(`/todo/${todoEdit.todoId}`,
      {
        todoName: todoEdit.newName,
        todoDesc: todoEdit.newDesc
      }
    )
  }

  const deleteTodo = async (todoDelete) => {
    dispatch(
        {
            type:"DELETE_TODO",
            payload:todoDelete.todoId
        }
    )
    await axios.delete(`/todo/${todoDelete.todoId}`,
      {
        id: todoDelete.todoId
      }
    )
  }



  const filteredtodo = state.todos.filter((todo) => {
    if (state.filter === "all") return todo;
    return todo.status === state.filter;
  }
  )
  useEffect(() => {
    getTodo()
  }, [])




  return (
    <div >
      <Header dispatch={dispatch} addtodo={addtodo} />
      {
        isLoading ? <h1>....loading</h1> :
          < Main card={filteredtodo} filter={state.filter} dispatch={dispatch} updateTodo={updateTodo} editTodo={editTodo} deleteTodo={deleteTodo}/>
      }
    </div>
  )
}

export default App