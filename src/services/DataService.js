import axios from 'axios';

class DataService {
    constructor() {
        this.axios = axios.create();
    }

    

}

export default new DataService;