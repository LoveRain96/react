import {LIST_INTERNSHIP_BY_ID} from "../internship/action";
import axios  from "axios"
const internshipApi = store => next => action => {
    if(action.type === LIST_INTERNSHIP_BY_ID) {
        let id = action.courseId;
        return axios.get('/course/'.concat(id).concat('/internships')).then(res => next({
            type : LIST_INTERNSHIP_BY_ID,
            internships : res.data
        }))
    }
    next(action);
};

export default internshipApi;