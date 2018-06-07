class UserService {
    constructor(axios, config) {
        this.axios  = axios;
        this.config = config;
    }

    editUser(data) {
        return this.axios.put(`${this.config.domain}/user`, data);
    }
}

export default UserService;
