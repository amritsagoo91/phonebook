import axios from "axios";
const baseUrl = 'http://localhost:3001/persons'

const getAll = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

const create = async (obj) => {
    const response = await axios.post(baseUrl, obj);
    return response.data;
}

const update = async (id, newObj) => {
    const request = axios.put(`${baseUrl}/${id}`, newObj)
    const response = await request;
    return response.data;

}


export default { getAll, create, update }