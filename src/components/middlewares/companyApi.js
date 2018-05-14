import {ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY, LOAD_COMPANY} from "../company/action";
import axios from 'axios'

const companyApi = store => next => action => {
    if (action.type === LOAD_COMPANY) {
        axios.get('/companies').then(res => next({
            type: LOAD_COMPANY,
                companies: res.data
        }))
    }
    else if (action.type === ADD_COMPANY) {
        axios.post('/company', {
            name: action.name,
            phoneManager: action.phoneManager,
            emailManager: action.emailManager,
            nameManager: action.nameManager,
            address: action.address
        }).then(res => next({
                type: ADD_COMPANY,
                company: res.data
            })
        )

    }

    else  if (action.type === EDIT_COMPANY) {
        let id = action.id;
        axios.put('/company/'.concat(id), {
            name: action.name,
            phoneManager: action.phoneManager,
            emailManager: action.emailManager,
            nameManager: action.nameManager,
            address: action.address
        }).then(res => next({
            type : EDIT_COMPANY,
            company : res.data,
            key_edit : action.key_edit
        }))
    }

    else if (action.type === DELETE_COMPANY) {
        let id = action.id;
        axios.delete('/company/'.concat(id)).then(() => next({
            type : DELETE_COMPANY,
            key_delete : action.key_delete
        }))
    }

    else next(action)
};

export default companyApi;