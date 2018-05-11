import {LOAD_COMPANY} from "./action";

export function companyReducer(state = [], action) {
    if (action.type === LOAD_COMPANY) {
        return [...action.companies]
    }

    return state;
}