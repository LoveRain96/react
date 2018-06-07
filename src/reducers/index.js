import {combineReducers} from "redux";
import {addCourseReducer} from '../components/course/reducers';
import {companyReducer} from '../components/company/reducers'
import {internshipReducer} from "../components/internship/reducers";
import {lecturerReducer} from "../components/lecturer/reducers";
import {internReducer} from "../components/intern/reducers";
import {areaReducer} from "../components/company/area/reducers";

export default combineReducers({
    addCourseReducer,
    companyReducer,
    internshipReducer,
    lecturerReducer,
    internReducer,
    areaReducer
})