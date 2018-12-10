import axios from 'axios';

export default class ApiService{
    static getLocations(baths = null, type = null){
        const queryString = `${baths ? "baths=" + baths + "&": ""}${type ? "type=" + type : ""}`;
        return axios.get(`http://localhost:8001/locations?${queryString}`);
    }

    static getTypes(){
        return axios.get(`http://localhost:8001/types`);
    }

    static getBaths(){
        return axios.get('http://localhost:8001/baths');
    }

    static getUsers(id = null){
        return axios.get(`http://localhost:8001/user?${id || ""}`);
    }
}