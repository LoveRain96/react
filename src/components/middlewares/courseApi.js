import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE, LOAD_COURSE} from "../course/actions";
import axios    from "axios";



const courseApi = store => next => action => {
    if (action.type === LOAD_COURSE) {
        axios.get('/courses').then(res => next({
            type : LOAD_COURSE,
            courses : res.data
        }))
    }

    else if (action.type === ADD_COURSE) {
        axios.post('/course',{
            name      : action.name,
            startDate : action.startDate,
            endDate   : action.endDate
        }).then(res => next({
                type: ADD_COURSE,
                course : res.data
            })
        )
    }

    else if (action.type === EDIT_COURSE) {
        let id = action.id;
        axios.put('course/'.concat(id), {
            name      : action.name,
            startDate : action.startDate,
            endDate   : action.endDate
        }).then(res => next({
            type : EDIT_COURSE,
            course: res.data,
            key_edit : action.key_edit
        }))
    }
    else if (action.type === DELETE_COURSE) {
        let id = action.id;
        axios.delete('/course/'.concat(id)).then(() => next({
            type : DELETE_COURSE,
            key_delete: action.key_delete
        }))
    }

    else next(action)
};

export default courseApi;
