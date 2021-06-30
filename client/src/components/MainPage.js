import React, { useState } from "react";
import {BrowserRouter as Router,Switch,Route,Link,useParams,Redirect} from 'react-router-dom';
import { connect } from "react-redux";


function mapStateToProps(state) {
    return {
        employees: state.EmployeeReducer.ArrEmployees,
        employee: state.EmployeeReducer.employee,
    };
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(function MainPage(props) {
    const { employees,employee } = props;
    const [degel,setDegel]=useState(false);
    const [status,setStatus]=useState(false);
    
function clickOnEmp(emp)
{
    if(employee)
    {
        if(emp.email==employee.email)
            setStatus(true)
    }
    else
    return <Redirect to={{pathname:'/',state:{flash:'Please log in'}}}></Redirect>
}

    return (
        <>
            <div className="app">
                <ol>{employees&&employees.map((x, y) => (
                    <li > {x.name}&nbsp;&nbsp;&nbsp;&nbsp;{x.EmployedStatus}</li>
                ))}</ol>
            </div>
        </>
    )
});