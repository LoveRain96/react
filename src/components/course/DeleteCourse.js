import axios from 'axios';
export default function deleteCourse(courseId) {
    return axios.delete('/course/'.concat(courseId)).then(function() {
        return 'success';
    })
}