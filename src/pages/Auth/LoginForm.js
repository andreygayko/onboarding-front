import React from 'react';

const style = {
    margin: '15px',
    border: '1px solid #ccc',
    width: '40%',
    height: '250px',
    display: 'block',
    paddingLeft: '15px'
}

const loginForm = props => {

    return (
        <div style={style}>
            <p>Email:</p>
            <input type='text' placeholder='Enter email' onChange={props.changedEmail}/>
            <p>Password:</p>
            <input type='password' placeholder='Enter password' onChange={props.changedPassword}/>
            <br />
            <button onClick={props.submitHandler}>Submit</button>
            <button onClick={props.getAllClickHandler}>Console token</button>
            <p>Haven't registered yet?</p>
        </div>
    )
};

export default loginForm;