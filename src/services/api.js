import axios from 'axios'
import credentials from '../credentials.json';

export default axios.create({
    baseURL: credentials.apiUrl
})