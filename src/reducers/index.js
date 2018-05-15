import {combineReducers} from "redux";
//import {addTodoReducer} from '../Todo/reducers';
import {addCourseReducer} from '../components/course/reducers';
import {companyReducer} from '../components/company/reducers'
import {areaReducer} from "../components/company/area/reducers";

export default combineReducers({
    addCourseReducer,
    companyReducer,
    areaReducer
    //addTodoReducer
})