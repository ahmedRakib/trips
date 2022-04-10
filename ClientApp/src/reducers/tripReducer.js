import {
    GET_ALL_TRIPS_REQUEST,
    GET_ALL_TRIPS_SUCCESS,
    GET_ALL_TRIPS_ERROR
} from '../actions/tripAction'

const INITIAL_STATE = {
    loading: false,
    data : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type){
        case GET_ALL_TRIPS_REQUEST:
            return{
                ...state,
                loading: true,
            };
            
        case GET_ALL_TRIPS_SUCCESS:
            return{
                ...state,
                loading: false,
                data: action.payload,
            }

        case GET_ALL_TRIPS_ERROR:
            return {
                loading: false,
                data:action.payload
            }
            
        default:
            return state;

    }
}