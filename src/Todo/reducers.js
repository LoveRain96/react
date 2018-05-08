import {ADD_TODO, CLEAR_TODO, UPDATE_TODO} from "./actions";

/*dau vao la mang rong nen khi no getState no chi hieu day la mang rong
* chu hoan toan k lay duoc cai mang maf ong fetch*/

export function addTodoReducer( state = [], action) {
    if (action.type=== ADD_TODO) {
        return [...state, {name: action.todo, done: false}]
    }
    else if (action.type=== UPDATE_TODO) {
        let newTodos =[...state];
        newTodos[action.todoId].done = action.done;
        return newTodos;
    }
    else  if (action.type===CLEAR_TODO) {
        return state.filter(todo => !todo.done);
    }
    else {
        return state;
    }

}
