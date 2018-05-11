import {combineReducers} from "redux";
//import {addTodoReducer} from '../Todo/reducers';
import {addCourseReducer} from '../components/course/reducers';
import {companyReducer} from '../components/company/reducers'

export default combineReducers({
    addCourseReducer,
    companyReducer
    //addTodoReducer
})