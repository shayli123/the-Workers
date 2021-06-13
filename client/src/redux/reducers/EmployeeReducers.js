import produce from 'immer';
import createReducer from './ReducerUtils'

const initialState = {
  email: null,
  password: null,
  employee: null,
  newEmployee: {
    name: null,
    email: null,
    password: null
  },
  ArrEmployees: null
};

const employees = {
  setEmployees(state, action) {
    state.ArrEmployees = action.payload;
  },
  setEmployee(state, action) {
    state.employee = action.payload;
  },
  setEmail(state, action) {
    state.email = action.payload;
  },
  setPassword(state, action) {
    state.password = action.payload;
  },
  setEmployeeEmail(state, action) {
    state.employee.email = action.payload;
  },
  setEmployeePassword(state, action) {
    state.employee.password = action.payload;
  },
  setNewEmployeeEmail(state, action) {
    state.newEmployee.email = action.payload;
  },
  setNewEmployeePassword(state, action) {
    state.newEmployee.password = action.payload;
  },
  setNewEmployeeName(state, action) {
    state.newEmployee.name = action.payload;
  },
};

export default produce((state, action) => createReducer(state, action, employees), initialState);
