import {combineReducers} from 'redux';
import {reducer as cardListReducer} from '../ducks/card-list-duck'

const rootReducer = combineReducers({
    cardListReducer
});

export default rootReducer;