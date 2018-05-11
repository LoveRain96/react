import {LOAD_COMPANY} from "../company/action";
import axios  from 'axios'

const companyApi = store => next => action => {
    if(action.type === LOAD_COMPANY) {
        axios.get('/companies').then(res => next({
            type : LOAD_COMPANY,
            companies : res.data
        }))
    }

    else next(action)
};

export default companyApi;