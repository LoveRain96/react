import {applyMiddleware, createStore} from "redux";
import  reducer from "../reducers/index";
import todoApi from "../Todo/todoApi";
import courseApi from "../components/middlewares/courseApi";
const middleware = [todoApi,courseApi];

const store = createStore(reducer,
    +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    , applyMiddleware(...middleware));

export default store;