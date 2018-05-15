import {LOAD_AREA} from "../company/area/action";
import axios from 'axios';

const areaApi = store => next => action => {
    switch (action.type) {
        case LOAD_AREA :
            return axios.get('/areas').then(res => next({
                type : LOAD_AREA,
                areas : res.data
            }));

    }

};

export default areaApi;