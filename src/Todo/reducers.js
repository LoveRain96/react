import {ADD_TODO, CLEAR_TODO, UPDATE_TODO} from "./actions";

const defaulTodos = [
    {name:"haha", done:true},
    {name: "test test", done: false}
    ];

export function addTodoReducer( state = defaulTodos, action) {
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
