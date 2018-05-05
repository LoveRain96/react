export const ADD_COURSE = "addCourse";

export function addCourse(course) {

    return {
        type        : ADD_COURSE,
        id          : course.id,
        name        : course.name,
        duration    : course.duration
    }
}