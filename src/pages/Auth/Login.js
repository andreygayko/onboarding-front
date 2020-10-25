import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import {sendCredentials} from 'redux/example/actions';

const Login = (props) => {
    const {token, sendCredentials} = props;

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword, setEteredPassword] = useState('');

    const submitHandler = props => {
        sendCredentials({username: enteredName, password: enteredPassword});
    };

    const emailChangedHandler = event => {
        const e = event.target.value;
        setEnteredName(prevState => e);
        console.log(enteredName);
    }

    const passwordChangeHandler = event => {
        const p = event.target.value;
        setEteredPassword(prevState => p);
        console.log(enteredPassword);
    }

    const getAllClickHandler = () => {
          console.log('tok: ' + token);   
    }


    return (
            <LoginForm 
                changedEmail={emailChangedHandler}
                changedPassword={passwordChangeHandler}
                submitHandler={submitHandler}
                getAllClickHandler={getAllClickHandler}/>
        )

}

const mapStateToProps = (state) => ({token: state.getToken.token});

const mapDispatchToProps = (dispatch) => ({
    sendCredentials: (data) => dispatch(sendCredentials(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);