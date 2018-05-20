import {combineReducers} from 'redux';
import {reducer as cardListReducer} from '../ducks/card-duck'
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
    cardList: cardListReducer,
    form: formReducer,
});

export default rootReducer;