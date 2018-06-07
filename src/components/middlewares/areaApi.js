import {CREATE_AREA, LOAD_AREA} from "../company/area/action";
import axios from 'axios';

const areaApi = store => next => action => {
    switch (action.type) {
        case LOAD_AREA :
            return axios.get('/company/'.concat(action.id).concat('/areas')).then(res => next({
                type : LOAD_AREA,
                areas : res.data
            }));
        case CREATE_AREA:
            return axios.post('/company/'.concat(action.company_id).concat('/area'),{
                company_id : action.company_id,
                name : action.name,
                address : action.address
            }).then(res => next({
                type : CREATE_AREA,
                area : res.data
            }));
        default : next(action)

    }

};

export default areaApi;