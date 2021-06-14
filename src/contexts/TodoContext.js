import React, {useState} from "react";
import {createContext} from "react";
import {ADD_TODO_ACTION, DELETE_TODO_ACTION} from "../actions/TodoActions";

export const TodoContext = createContext();

let cur_id = 0;

export const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([]);

    const addTodo = inputValue => {
        if (inputValue.length === 0)
            return;

        let todosCopy = todos.slice();
        todosCopy.push({id: cur_id++, name: inputValue});

        setTodos(todosCopy);
    };

    const deleteTodo = todoId => {
        let todosCopy = todos.filter(todo => todo.id !== todoId);

        setTodos(todosCopy);
    };

    const handler = action => {
        switch (action.type) {
            case ADD_TODO_ACTION:
                addTodo(action.payload)
                break;
            case DELETE_TODO_ACTION:
                deleteTodo(action.payload)
                break;
        }
    };

    return (
        <TodoContext.Provider value={[todos, handler]}>{props.children}</TodoContext.Provider>
    );
};