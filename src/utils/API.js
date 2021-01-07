import axios from "axios";
const URL = "https://randomuser.me/api/?results=";

export default {
    search: function (query) {
        return axios.get(URL + query);
    }
};

