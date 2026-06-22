const Reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "GET_TODO":
            return {
              ...state,
              todos:action.payload
            }
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case "UPDATE_STATUS":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.todoId
                        ? {
                            ...todo,
                            status: action.payload.todoStatus
                        } :
                        todo
                )
            }
        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id !== action.payload
                )
            }
        case "EDIT_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload.todoId
                        ? {
                            ...todo,
                            todoName: action.payload.name,
                            todoDesc: action.payload.desc
                        }
                        : todo
                )
            };
        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload
            }
        default:
            return state
    }
}
export default Reducer;