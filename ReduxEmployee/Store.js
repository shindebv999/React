import{createStore} from 'redux';
// import userReducer from './Reducer/userReducer';
import employeeReducer from './Reducer/EmployeeReducer';
// const store=createStore(userReducer)
const store=createStore(employeeReducer)
export default store;