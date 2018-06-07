class CompanyService {
    constructor(axios, config) {
        this.axios  = axios;
        this.config = config;
    }

    getCompany(id) {
        return this.axios.get(`${this.config.domain}/company/${id}`);
    }
    getCompanies() {
        return this.axios.get(`${this.config.domain}/companies`);
    }
    putCompany(id, data) {
        return this.axios.put(`${this.config.domain}/company/${id}`, data)
    }
}

export default CompanyService;
