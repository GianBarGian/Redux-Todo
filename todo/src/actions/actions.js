import uuid from 'uuid';

export const ADD_TODO = "ADD_TODO";
export const COMPLETED_TODO = "COMPLETED_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";
export const DELETE_TODO = "DELETE_TODO";

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

export function clearCompleted() {
    return {
        type: CLEAR_COMPLETED,
    }
}

export function deleteTodo(id) {
    return {
        type: DELETE_TODO,
        payload: id,
    }
}