import axios from 'axios';
const baseUrl = 'http://localhost:3001/notes';

const getAll = () => {
    const request = axios.get(baseUrl)
    const response = request.then(response => response.data)
    return response
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    const response = request.then(response => response.data)
    return response
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    const response = request.then(response => response.data)
    return response
}

export default { getAll, create, update }
