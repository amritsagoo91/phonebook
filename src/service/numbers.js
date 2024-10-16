import axios from "axios";

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (newobj) => {
    return axios.post(baseUrl, newobj).then(response => response.data)
}



export default { getAll, create }