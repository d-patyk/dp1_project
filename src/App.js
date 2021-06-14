import './App.css';
import {useContext, useState} from "react";
import {TodoItem} from "./components/TodoItem";
import {TodoContext} from "./contexts/TodoContext";
import {ADD_TODO_ACTION, DELETE_TODO_ACTION} from "./actions/TodoActions";
import {createAction} from "./actions/createAction";

function App() {
    const [todos, handler] = useContext(TodoContext);

    const [inputValue, setInputValue] = useState("");



    return (
        <div className="App">
            <section>
                <input id="input" type={"text"} placeholder={"Введи заданьице"} value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                <button
                    onClick={() => {
                        handler(createAction(ADD_TODO_ACTION, inputValue));
                        setInputValue("");
                    }}>
                    Add
                </button>
            </section>
            <section>
                {
                    todos.map(todo => {
                       return (
                           <TodoItem
                               key={todo.id}
                               todo={todo}
                               onClick={() => handler(createAction(DELETE_TODO_ACTION, todo.id))}/>
                       );
                    })
                }
            </section>
        </div>
    );
}

export default App;
