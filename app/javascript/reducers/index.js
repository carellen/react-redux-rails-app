import { combineReducers } from 'redux';
import companies from './companies';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  companies,
  form
})

export default rootReducer;
