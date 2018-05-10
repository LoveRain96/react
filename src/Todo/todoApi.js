import {ADD_TODO, CLEAR_TODO, LOAD_TODO, UPDATE_TODO} from "./actions";
import axios from "axios/index";


const todoApi = store => next => action => {
    if(action.type === LOAD_TODO) {
        axios.get('/todo.json').then(res => next({
            type : LOAD_TODO,
            todos : res.data
        }));
    }
    if(action.type === ADD_TODO) {
     next(action)
    }

    if(action.type === UPDATE_TODO) {
        next(action)
    }

    if (action.type === CLEAR_TODO) {
        next(action)
    }

    next(action);
};

export default todoApi;