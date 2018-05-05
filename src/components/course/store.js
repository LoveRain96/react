import {addCourseReducer} from "./reducers";
import {createStore} from "redux";

const store = createStore(addCourseReducer);

export default store;