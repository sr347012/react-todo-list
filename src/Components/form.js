import react from "react";

const Form =({inputText, setInputText , todos, setTodos}) => {

    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let randId = Math.round(Math.random()*100);
        
        // console.log(todo);
        setTodos ([...todos, {id: randId, name : inputText, completed: false}]);
        console.log(todos);
        setInputText("")
    }
    // const delHandler = () => {
    //     setTodos(todos.filter(el=>
    //         // console.log(el);
    //         el.id !== todos.id
    //     ))
    // }
    return (
        <div>
            <form >
                <input type="text" onChange={inputTextHandler} value={inputText}/>
                <button type="submit" onClick={submitHandler}>Add</button>
                {/* <button type="submit" onClick={delHandler}>Delete</button> */}
                <select name="todos" >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incomplete">Incomplete</option>
                </select>
            </form>
        </div>
    )
}

export default Form