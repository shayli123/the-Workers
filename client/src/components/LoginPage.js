import { React, useState, useEffect } from 'react';
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {ActionEmployee} from '../redux/Actions/‏‏ActionEmployee'


function mapStateToProps(state) {
    return {
        employee:state.EmployeeReducer.employee,
    };
}
 
const mapDispatchToProps = (dispatch) => ({
    getEmployedByEmail: () => dispatch(ActionEmployee.getEmployedByEmail()),
    setEmail:(email) => dispatch(ActionEmployee.setEmail(email)),
    setPassword:(password) => dispatch(ActionEmployee.setPassword(password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function MainPage(props) {
    const { setPassword,setEmail,employee,getEmployedByEmail } = props;
    const [email, setemail] = useState(null);
    const [password, setpassword] = useState(null);

    function Send() {
        setEmail(email);
        setPassword(password);
        getEmployedByEmail();
        alert("You've logged in successfully");
    }
    return (
        <>
            <div style={{textAlign: 'center'}}>
            <b>Enter your email address:</b> <input type="text" onChange={(e)=>setemail(e.target.value)}></input><br></br><br></br>
            <b>Enter your password: </b><input type="text" onChange={(e)=>setpassword(e.target.value)}></input><br></br><br></br>
            <button onClick={()=>Send()}><b>send</b></button>
            </div>
        </>
    )
});