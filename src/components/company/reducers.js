import {ADD_COMPANY, DELETE_COMPANY, EDIT_COMPANY, LOAD_COMPANY} from "./action";

export function companyReducer(state = [], action) {
    if (action.type === LOAD_COMPANY) {
        return [...action.companies]
    }

    if (action.type === ADD_COMPANY) {
        return  [...state, {...action.company}]
    }   

    if (action.type === EDIT_COMPANY) {
        const newCompany = [...state];
        newCompany[action.key_edit] = action.company;
        return [...newCompany];
    }

    if (action.type === DELETE_COMPANY) {
        const newCompany = [...state];
        newCompany.splice(action.key_delete, 1);
        return newCompany;
    }

    return state;
}