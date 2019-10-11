import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import blogs from './blogs';

const rootReducer = combineReducers({
  blogs,
  form: formReducer
})

export const store = createStore(rootReducer);
