export const LOAD_INTERNSHIP = "loadInternship";
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