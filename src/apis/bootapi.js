import axios from "axios";

const base_url = 'http://localhost:9090';
export default base_url;

export const MyAxios = axios.create({
    baseURL: base_url
});