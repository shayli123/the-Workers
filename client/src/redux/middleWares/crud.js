import axios from 'axios';
import { ActionEmployee } from '../Actions/‏‏ActionEmployee';
import { EmployeeReducer } from '../reducers/EmployeeReducers';

export const UpperToEmployeeName = ({ dispatch, getState }) => next => action => {
    console.log("")
    if (action.type === 'GET_ARR_EMPLOYEES') {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
          fetch("http://localhost:4000/getAllEmployed", requestOptions)
            .then(
                response => response.json())
            .then(data => {
                const Arr = data.employees;
                dispatch(ActionEmployee.setEmployees(Arr))
            })
            .catch(error => console.log('error', error))
    }
    if (action.type === 'GET_EMPLOYED_BY_EMAIL') {
        fetch(`http://localhost:4000/${getState().EmployeeReducer.email}/getEmployedByEmail`,
            {
                method: 'GET',
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW9zZWYiLCJwYXNzd29yZCI6Ijc1MzI2NSIsImlhdCI6MTYyMDMyMjk5NH0.kr60OZZupqoqlMtmc_zzTItuenJPx75Zapwy0Yh_8eU'
                }
            })
            .then(
                response => response.json())
            .then(data => {
                const newE = data.WantedEmployee;
                dispatch(ActionEmployee.setEmployee(newE))
            })
            .catch(error => console.log('error', error))
    }
    if (action.type === 'ADD_N_EMPLOYEE') {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify(getState().EmployeeReducer.newEmployee);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
    }
    return next(action);
};

