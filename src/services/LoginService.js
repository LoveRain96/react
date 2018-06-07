class LoginService {
    constructor(axios, config) {
        this.axios  = axios;
        this.config = config;
    }

    login(data) {
        return this.axios.post(`${this.config.domain}/login`, data);
    }
}

export default LoginService;
