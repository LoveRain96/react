import {ADD_COURSE, DELETE_COURSE, EDIT_COURSE} from "./actions";

export function addCourseReducer(state = [], action) {
    if (action.type === ADD_COURSE) {
        return [...state, {
            id: action.id,
            name: action.name,
            duration: action.duration
        }];
    }

    if (action.type === DELETE_COURSE) {
        const newCourse = [...state];
        newCourse.splice(action.key_delete, 1);
        console.log(newCourse);
        return newCourse;
    }

    if (action.type === EDIT_COURSE) {
        const newCourse = [...state];
        newCourse[action.key_edit].name = action.name;
        newCourse[action.key_edit].startDate = action.startDate;
        newCourse[action.key_edit].endDate = action.endDate;
        return newCourse;
    }

    return state;
}
