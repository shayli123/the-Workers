import { createStore, combineReducers, applyMiddleware } from 'redux';
import { ActionEmployee } from '../redux/Actions/‏‏ActionEmployee';
import EmployeeReducer from './reducers/EmployeeReducers';
import {UpperToEmployeeName} from './middleWares/crud'

const reducer = combineReducers({EmployeeReducer});

const store = createStore(reducer,applyMiddleware(UpperToEmployeeName));
store.dispatch(ActionEmployee.getArrEmployees())
window.store = store;
export default store;
