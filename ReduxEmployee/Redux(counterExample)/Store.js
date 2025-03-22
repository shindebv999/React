import{createStore} from 'redux';
import userReducer from './Reducer/userReducer';
const store=createStore(userReducer)
export default store;