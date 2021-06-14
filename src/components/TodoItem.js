import React from "react";

export const TodoItem = (props) => {
    return (
        <div>
            <div>{props.todo.name}</div>
            <button onClick={e => props.onClick(e, props.todo.id)}>Delete</button>
        </div>
    );
}