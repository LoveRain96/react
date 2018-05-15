import {combineReducers} from "redux";
import {addCourseReducer} from '../components/course/reducers';
import {companyReducer} from '../components/company/reducers'
import {internshipReducer} from "../components/internship/reducers";

export default combineReducers({
    addCourseReducer,
    companyReducer,
    internshipReducer
})