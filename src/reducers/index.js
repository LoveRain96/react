import {combineReducers} from "redux";
import {addTodoReducer} from '../Todo/reducers';
import {addCourseReducer} from '../components/course/reducers'
export default combineReducers({
    addCourseReducer,
    addTodoReducer
})