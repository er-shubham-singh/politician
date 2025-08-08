import axios from 'axios'
import { CONTACT_FAIL, CONTACT_REQUEST, CONTACT_SUCCESS } from './ActionType'


const BASE_URL = import.meta.env.VITE_API_URL
export const createContact =(form) => async(dispatch)=>{
    try{
        dispatch({type:CONTACT_REQUEST})

        const {data} = await axios.post(`${BASE_URL}/api/contact/create-contact`,form)
        dispatch({
            type:CONTACT_SUCCESS,
            payload:data.message
        })
    } catch(error){
        dispatch({
            type:CONTACT_FAIL,
            payload:error.response?.data?.error||"Something wrong"
        })
    }
}