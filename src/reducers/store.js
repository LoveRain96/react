import {applyMiddleware, createStore} from "redux";
import  reducer from "../reducers/index";
import todoApi from "../components/middlewares/todoApi";
import courseApi from "../components/middlewares/courseApi";

const store = createStore(reducer, applyMiddleware(...[courseApi,todoApi]));

export default store;