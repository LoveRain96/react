import {ADD_INTERNSHIP, DELETE_INTERNSHIP, EDIT_INTERNSHIP, LIST_INTERNSHIP_BY_ID} from "../internship/action";
import axios  from "axios"

const internshipApi = store => next => action => {
    if(action.type === LIST_INTERNSHIP_BY_ID) {
        let id = action.courseId;
        return axios.get('/course/'.concat(id).concat('/internships')).then(res => next({
            type : LIST_INTERNSHIP_BY_ID,
            internships : res.data,
            course_id : id
        }))
    }
    if(action.type === ADD_INTERNSHIP) {
        let id = action.course_id;
        return axios.post('/course/'.concat(id).concat('/internship'),{
            course_id : action.course_id,
            lecturer_code : action.lecturer_code,
            company_id : action.company_id,
            deadline : action.deadline
        }).then(res => next({
            type : ADD_INTERNSHIP,
            internship : res.data,
        }))
    }
    if(action.type === EDIT_INTERNSHIP) {
        return axios.put('/course/'.concat(action.course_id).concat('/internship/').concat(action.id),{
            course_id : action.course_id,
            lecturer_code : action.lecturer_code,
            company_id : action.company_id,
            deadline : action.deadline
        }).then(res => next({
            type : EDIT_INTERNSHIP,
            key_edit : action.key_edit,
            internship : res.data,
        }))
    }
    else if (action.type === DELETE_INTERNSHIP) {
        axios.delete('/course/'.concat(action.course_id).concat('/internship').concat(action.id)).then(() => next({
            type : DELETE_INTERNSHIP,
            key_delete: action.key_delete
        }))
    }
    next(action);
};

export default internshipApi;