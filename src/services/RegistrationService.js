class RegistrationService{
    constructor(axios, config) {
        this.axios  = axios;
        this.config = config;
    }

    getConfirmed(id, data) {
        return this.axios.get(`${this.config.domain}/confirmed/${id}`, data);
    }
    getPending(id, data) {
        return this.axios.get(`${this.config.domain}/pending/${id}`, data);
    }
    registration(id, data) {
        return this.axios.post(`${this.config.domain}/registration/send/${id}`, data);
    }
    confirmed(id, data) {
        return this.axios.put(`${this.config.domain}/registration/confirmed/${id}`, data);
    }
}

export default RegistrationService;
