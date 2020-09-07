import {combineReducers} from 'redux';
import userReducer from './user/reducer/user.reducer';
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
