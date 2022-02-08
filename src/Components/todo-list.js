import react from "react";
import Todo from "./todo";

const TodoList = ({todos, setTodos}) => {
    return (
        <div className="todo-item">
            <ul>
                
                    {todos.map((todo)=> <li>
                        <Todo  
                            
                            name={todo.name} 
                            id={todo.id}
                            todo = {todo}
                            todos = {todos}
                            setTodos = {setTodos}
                            key = {todo.id}
                            /></li>)}
                

            </ul>
        </div>
    )
}

export default TodoList;