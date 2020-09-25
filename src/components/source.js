import axios from 'axios'

//api Key
const headers = { "x-api-key": "26af3b4a-63d7-40fc-834b-0d47ae687683" }

//get svih pasa
export const getAll = () => {

    return axios.get('https://api.thedogapi.com/v1/breeds', headers)
}

//get slike psa na osnovu ID-a
export const getImageById = (id) => {

    return axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`, headers)
}

//get slika za Breeds
export const getBreeds = (id) => {

    return axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`, headers)
}
