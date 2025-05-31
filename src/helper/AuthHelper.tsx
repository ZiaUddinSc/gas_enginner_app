import axios from 'axios';
import {baseUrl,endpoints} from '../config/settings'
export const login = async(data)=>{
 return data = await axios.post(`${baseUrl}${endpoints.login}`, data)
    .then(response => {
      return response.data;
    })
    .catch(error => {
     return false
    });
} 

