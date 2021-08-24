import axios from 'axios';

export async function getAllPokemon(url){
    return new Promise((resolve,reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

export async function getPokemon(url){
    return new Promise ((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            resolve(data);
        })
    })
}

const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export default api;