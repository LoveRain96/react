import axios from 'axios';
import config from '../config';

import CompanyEditor       from './CompanyService';
import AreaService         from './AreaService';
import LecturerService     from "./LecturerService";
import InternService       from "./InternService";
import LoginService        from "./LoginService";
import CourseService       from "./CourseService";
import RegistrationService from "./RegistrationService";
import InternshipService   from "./InternshipService";
import UserService         from "./UserService";

axios.interceptors.request.use(axiosConfig => {
    //TODO add token here
    //bla bla
    return axiosConfig;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response,
    error => {
        if (error.response && +error.response.status === 403) {
            return window.location.reload();
        }
        return Promise.reject(error.response);
    }
);
export let userService = new UserService(axios, config);
export let lecturerService = new LecturerService(axios, config);
export let internService = new InternService(axios, config);
export let CompanyEditorService = new CompanyEditor(axios, config);
export let areaService = new AreaService(axios, config);
export let loginService = new LoginService(axios, config);
export let internshipService = new InternshipService(axios, config);
export let courseService = new CourseService(axios, config);
export let registrationService = new RegistrationService(axios, config);


