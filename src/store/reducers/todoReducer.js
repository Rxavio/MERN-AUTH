const todoReducer = (state=[], action) => {
    // return state
     switch (action.type) {
    case "ADD_TODO":
       console.log(action)
       return [action.todo.data, ...state];
       default:
          return state;

    case "GET_TODOS":
       return action.todos.data;      
    }

   


};

export default todoReducer;