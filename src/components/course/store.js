//import {middleware} from "../middlewares/Test.middleware";
import {addCourseReducer} from "./reducers";
import {createStore} from "redux";

const store = createStore(addCourseReducer);

export default store;