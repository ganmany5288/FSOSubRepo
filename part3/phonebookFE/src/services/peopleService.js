import axios from 'axios'
// const baseUrl = 'http://localhost:3002/api/people'
const baseUrl = 'https://phonebookbe.onrender.com/api/people'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const deleteUser = (id) => {
    // 2nd Parameter for axios.delete() is an axios option, NOT part of the request body
    // That is to delete a specific id, you will have to put it as part of the request body to be deleted
    const request = axios.delete(`${baseUrl}/${id}`)
    return request.then(response => response.data)

}
export default {
    getAll,
    create,
    update,
    deleteUser
}