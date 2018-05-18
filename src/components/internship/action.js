export const LOAD_INTERNSHIP = "loadInternship";
export const ADD_INTERNSHIP = "ADD_INTERNSHIP";
export const LIST_INTERNSHIP_BY_ID = "listInternshipById";


export function listInternshipById(id) {
    return {
        type : LIST_INTERNSHIP_BY_ID,
        courseId : id
    }
}

export function loadInternship() {
    return {
        type : LOAD_INTERNSHIP,
    }
}
export function addInternship(course_id, lecturer_id, company_id, deadline) {
    return {
        type : ADD_INTERNSHIP,
        course_id : course_id,
        lecturer_id : lecturer_id,
        company_id : company_id,
        deadline : deadline
    }
}