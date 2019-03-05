import React from 'react';
import styled from 'styled-components';

export default function TodoItem({ completed, completedTodo, text, id, deleteTodo }) {
    return (
        <StyledTodo completed={completed} >
            <p  
                onClick={e => completedTodo(e.target.id)} 
                id={id}
            >
                {text}
            </p>
            <button id={id} onClick={e => deleteTodo(e.currentTarget.id)}>Delete</button>
        </StyledTodo>
    )
}

const StyledTodo = styled.li`
    p {
        text-decoration: ${pr => pr.completed ? 'line-through' : 'none'};
        display: inline-block;
    }
    button {
        margin-left: 10%;
    }
`;

