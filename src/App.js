import React,{ useState, useEffect } from 'react';
import './App.css';
//importo components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  //EFFECT para la primera vez q se abre
  useEffect(()=>{
    getLocalTodos();
  }, []);

  //EFFECT
  useEffect(()=>{
    savelocalTodos();
  },[todos]);

  //Guardando todos
  const savelocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else{
      let todolocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todolocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Task box</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList  setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
