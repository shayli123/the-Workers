import React from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ActionEmployee } from "../redux/Actions/‏‏ActionEmployee";


function mapStateToProps(state) {
    return {
        // employees: state.EmployeeReducer.ArrEmployees,
        employee:state.EmployeeReducer.employee,

    };
}

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(function MainPage(props) {
    const { employee,getEmployedByEmail } = props;
    // const anyEmployee=
    return (
        <>
        {!employee&&
        <h3>Please log in</h3>}
            {employee&&
            <div>
            <h1>employed Details:</h1>
            <h4>name: {employee.name}</h4>
            <h4>email: {employee.email}</h4>
            <h4>password: {employee.password}</h4>
        </div>}
        </>
    )
});