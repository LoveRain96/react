export const ADD_COURSE = "addCourse";
export const DELETE_COURSE = "deleteCourse";
export const EDIT_COURSE   = "editCourse";

export function addCourse(course) {
    return {
        type        : ADD_COURSE,
        id          : course.id,
        name        : course.name,
        duration    : course.duration
    }
}

export function deleteCourse(courseId, key_delete) {
    return {
        type        : DELETE_COURSE,
        id          : courseId,
        key_delete  : key_delete
    }
}

export function editCourse(course, key_edit) {
    return {
        type        : EDIT_COURSE,
        id          : course.id,
        name        : course.name,
        duration    : course.duration,
        key_edit    : key_edit
    }
}