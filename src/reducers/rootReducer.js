import { combineReducers } from 'redux';
import calculatorReducers from './reducers';

const rootReducer = combineReducers({
  calculatorReducers,
});

export default rootReducer;
