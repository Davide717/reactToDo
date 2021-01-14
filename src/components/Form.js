import React from 'react';

const Form = ({setInputText,todos,setTodos,inputText})=>{
    //aca puedo escribir js y funciones
    const inputTextHandler =(e) =>{
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) =>{
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false,id: Math.random()*2}
        ]);
        setInputText("");
    }
    return(
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
      Add</button>

    </form>
    );
}

export default Form;