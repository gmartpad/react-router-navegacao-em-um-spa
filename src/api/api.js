import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export const busca = async (url, setDado) => {
    const resultado = await api.get(url)
    setDado(resultado.data)
}