import {ADD_COURSE} from "./actions";

export function addCourseReducer(state = [], action ) {
    if(action.type === ADD_COURSE) {
        console.log([...state, {
            id          : action.id,
            name        : action.name,
            duration    : action.duration
        }]);
        return [...state, {
            id          : action.id,
            name        : action.name,
            duration    : action.duration
        }]
    }
    return state;
}