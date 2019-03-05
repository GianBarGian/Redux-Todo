import uuid from 'uuid';

export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";

export function addTodo(text) {
    return {
        type: ADD_TODO,
        payload: {
            id: uuid(),
            text,
            completed: false,
        }
    }
}

export function completedTodo(id) {
    return {
        type: COMPLETED_TODO,
        payload : id,
    }
}