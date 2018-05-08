import axios from 'axios';

export default function getCourses() {
    return axios.get('/courses').then(function (response) {
        return response.data;
    })
}