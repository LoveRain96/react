import {ADD_TODO, CLEAR_TODO, LOAD_TODO, UPDATE_TODO} from "./actions";

export function addTodoReducer(state = [{name: "test test", done: false}, {name: "test test 2", done: true}], action) {
    if (action.type === ADD_TODO) {
        return [...state, {name: action.todo, done: false}]
    }
    else if (action.type === UPDATE_TODO) {
        let newTodos = [...state];
        newTodos[action.todoId].done = action.done;
        return newTodos;
    }
    else if (action.type === CLEAR_TODO) {
        return state.filter(todo => !todo.done);
    }

    else if (action.type === LOAD_TODO) {
        console.log([...action.todos]);
        return [...action.todos];
    }
    else {
        return state;
    }

}

