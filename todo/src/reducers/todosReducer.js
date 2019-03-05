import { ADD_TODO, COMPLETED_TODO, CLEAR_COMPLETED, DELETE_TODO } from  '../actions/actions'


export default function todosReducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case COMPLETED_TODO:    
            return state.map(todo => {
                console.log(action.payload);
                console.log(todo.id);
                if (action.payload === todo.id) {
                    todo.completed = true;
                    return todo;
                }
                return todo;
            });
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
        case DELETE_TODO:
            console.log(action.payload)
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;

    }
}