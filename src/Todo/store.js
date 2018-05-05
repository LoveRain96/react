import {createStore} from 'redux'
import {addTodoReducer} from "./reducers";

const store = createStore(addTodoReducer);

export default store;