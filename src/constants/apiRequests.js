import axios from 'axios'

const url = process.env.REACT_APP_API_URI
const key = process.env.REACT_APP_API_KEY

export function get(id){
    return axios.get(`${url}/get?key=${key}&rId=${id}`)
}

export function search(recipe){
    return axios.get(`${url}/search?key=${key}&q=${recipe}`)
}
