import {combineReducers} from 'redux';
import tripReducers from './tripReducer';

const rootReducer = combineReducers({
    trips : tripReducers
})

export default rootReducer;