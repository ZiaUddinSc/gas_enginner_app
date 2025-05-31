import axios from 'axios';

import Settings from '../config/settings'
import { Alert } from 'react-native';
export const UserLogin = async(data)=>{

  // console.log('URL=>>>',  `${Settings.baseUrl}${Settings.endpoints.login}`)
 return data = await axios.post(`${Settings.baseUrl}${Settings.endpoints.login}`, data)
    .then(response => {
      // console.log('data===>>>',response.data)
      return response.data;
    })
    .catch(error => {
     return false
    });
} 

