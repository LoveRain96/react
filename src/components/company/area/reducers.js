import {LOAD_AREA} from "./action";

export function areaReducer(state = [], action) {
    switch (action.type) {
        case LOAD_AREA :
            return [...action.areas];


        default:
            return state
    }
}