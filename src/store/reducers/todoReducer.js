import { toast } from "react-toastify";
const todoReducer = (state=[], action) => {
    // return state
     switch (action.type) {
    case "ADD_TODO":
      toast.success("A todo was added...", {
         position: toast.POSITION.BOTTOM_RIGHT,
       });
      //  console.log(action)
       return [action.todo.data, ...state]; 
    case "GET_TODOS":
       return action.todos.data;    
    case "UPDATE_TODO":
      return state.map((todo) => 
         todo._id === action.todo.data._id ? action.todo.data : todo
      )


      default:
         return state;
    }
};
export default todoReducer;