export const ADD_COURSE             = "addCourse";
export const DELETE_COURSE          = "deleteCourse";
export const EDIT_COURSE            = "editCourse";
export const CHECKED_COURSE         = 'checkCOURSE';
export const DELETE_COURSE_CHECKED  = 'deleteCheckCOURSE';
export const LOAD_COURSE            = 'loadCourse';

export function addCourse(name, startDate, endDate) {
    return {
        type        : ADD_COURSE,
        name        : name,
        startDate   : startDate,
        endDate     : endDate,
    }
}

export function loadCourse() {
    return {
        type : LOAD_COURSE
    }
}

export function deleteCourseChecked() {
    return {
        type        : DELETE_COURSE_CHECKED
    }
}
export function deleteCourse(id,key_delete) {
    return {
        type        : DELETE_COURSE,
        id          : id,
        key_delete  : key_delete
    }
}

export function editCourse(id, name, startDate, endDate, key) {
    return {
        type        : EDIT_COURSE,
        id          : id,
        name        : name,
        startDate   : startDate,
        endDate     : endDate,
        key_edit    : key
    }
}

export function checkedCourse(id, checked) {
    return {
        type: CHECKED_COURSE,
        checked: checked,
        id: id
    }
}
