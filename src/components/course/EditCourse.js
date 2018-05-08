import axios from 'axios';

export default function EditCourse(course) {
    return axios.put('/course/'.concat(course.id)).then(res=> res.data)
}