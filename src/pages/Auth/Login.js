import React, { useState } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import LoginForm from './LoginForm';
import {sendCredentials} from 'redux/example/actions';

const Login = (props) => {
    const {tokken, sendCredentials} = props;

    const [enteredName, setEnteredName] = useState('');
    const [enteredPassword, setEteredPassword] = useState('');
    const [token, setToken] = useState('');

    const submitHandler = props => {
        /*axios.post('http://localhost:8080/auth/login', {username: state.username, password: state.password})
            .then(response => {
                console.log(response.token);
                setState({token: response.token})
        })
        
            const ran = Math.random();
            setToken(prevState => ran);
         console.log(enteredName, enteredPassword, token);*/
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
       /* axios.get('http://localhost:8080/users', { headers: {
            Authorization: this.state.token,
          }}).then(response => {
              console.log(response);
          })*/ 
          console.log('tok: ' + tokken);   
    }


    return (
            <LoginForm 
                changedEmail={emailChangedHandler}
                changedPassword={passwordChangeHandler}
                submitHandler={submitHandler}
                getAllClickHandler={getAllClickHandler}/>
        )

}

const mapStateToProps = (state) => ({tokken: state.getToken.token});

const mapDispatchToProps = (dispatch) => ({
    sendCredentials: (data) => dispatch(sendCredentials(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);