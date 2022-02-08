import react from "react";
// import { DeleteForeverRounded } from "@mui/icons-material"; 
// @mui/icons-material/DeleteRounded
// import DeleteIcon from '@mui/icons-material/Delete';
// import check from './assets/check.png'
const Todo = ({id, name, todos, setTodos, todo}) => {
    const delHandler = () => {
        // console.log(todos);
        setTodos(todos.filter(el => 
            // console.log(el,todos.id)
            el.id !== id
            ))
    }
    const editHandler = () => {
        setTodos (todos.map((item)=>{
            // console.log('match this', item);
            if(item.id == id){
                return {...item, completed: true}
            }
            return item
        }
        
        ));
        console.log(todos);
    }
    return (
        <div className="todo-container">
            <h2>{todo.name}</h2> 
            <button onClick={delHandler}>Del
            </button>
            <button onClick={editHandler}>
                {/* <img src='./assets/check.png'></img> */}Mark
            </button>
        </div>
    )
}

export default Todo;