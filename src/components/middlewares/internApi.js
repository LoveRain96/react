import axios  from "axios"
import {LOAD_INTERN} from "../intern/action";
const internApi = store => next => action => {
    if(action.type === LOAD_INTERN) {
        return axios.get('/interns').then(res => next({
            type : LOAD_INTERN,
            interns : res.data
        }))
    }
    next(action);
};

export default internApi;