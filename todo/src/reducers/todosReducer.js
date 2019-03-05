import { ADD_TODO, COMPLETED_TODO, CLEAR_COMPLETED } from  '../actions/actions'


export default function todosReducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return state.concat(action.payload);
        case COMPLETED_TODO:    
            return state.map(todo => {
                if (action.payload === todo.id) {
                    todo.completed = true;
                    return todo;
                }
                return todo;
            });
        case CLEAR_COMPLETED:
            return state.filter(todo => todo.completed === false);
        default:
            return state;

    }
}