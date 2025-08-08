import { CONTACT_FAIL, CONTACT_REQUEST, CONTACT_SUCCESS } from "./ActionType"



const initialState={
    loading:false,
    success:false,
    error:null,
    message:''
}

const contactReducer = (state=initialState,action)=>{
    switch(action.type){
        case CONTACT_REQUEST :
            return{...state,loading:true, success:false, error:null}
        case CONTACT_SUCCESS :
            return{...state,
                loading:false,
                success:true,
                message:action.payload
            }
        case CONTACT_FAIL :
            return{...state,
                loading:false,
                error:action.payload,
                success:false
            }
        default:
            return state
    }
}

export default contactReducer