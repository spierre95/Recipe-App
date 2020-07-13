import axios from 'axios'
const url = process.env.REACT_APP_API_URI

export function get(id){
    return axios.get(`${url}/get?rId=${id}`)
}

export function search(recipe){
    return axios.get(`${url}/search?q=${recipe}`)
}
