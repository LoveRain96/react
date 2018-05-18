import {ADD_INTERNSHIP, LIST_INTERNSHIP_BY_ID, LOAD_INTERNSHIP} from "./action";

export  function internshipReducer(state = [], action) {
    if (action.type === LOAD_INTERNSHIP) {
        return [...state]
    }
    if (action.type === LIST_INTERNSHIP_BY_ID) {
        state = action.internships;
        return state;
    }
    if(action.type === ADD_INTERNSHIP) {
        return [...state, {...action.internship}]
    }

    return state;
}