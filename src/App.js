import logo from './logo.svg';
import './App.css';
import  TodoList  from './Components/todo-list'
import  Form  from './Components/form'
import { useState } from 'react';
function App() {

  const [inputText, setInputText] = useState ("");
  const [ todos, setTodos]= useState([{id:1, name:"Sample todo", completed: false}]);
  return (
    <div className="App">
      <div>
        <h1>Todo List</h1>
       
        <Form 
        inputText={inputText} 
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText} />
         <TodoList todos={todos} 
        setTodos={setTodos}/>
                        {/* <img src='./assets/del.png'/>   */}
      </div>
    </div>
  );
}

export default App;
