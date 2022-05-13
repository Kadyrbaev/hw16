import React, { useState, useEffect, useReducer } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

  const emailReducer = (prevState, action)=>{
    if(action.type === "USER_INPUT"){
      return {
        value: action.emailValue,
        isValid: action.emailValue.includes('@')
      }
    }
    if(action.type==="INPUT_BLUR"){
      return {
        value: prevState.value,
        isValid: prevState.value.includes('@')
      }
    }
    return {
      value: '',
      isValid: undefined
    }
  }

//debouncing, debounce
const Login = (props) => {

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    isValid: undefined,
    value: ''
  })

  
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(); 
  const [formIsValid, setFormIsValid] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => { 
      setFormIsValid(emailState.value.includes('@') && enteredPassword.trim().length > 6);
      console.log('changed');
    }, 300);
    // clean up function
    return () => {
      clearTimeout(timer);
    };
  }, [emailState.value, enteredPassword]);


  const emailChangeHandler = (event) => { 
    dispatchEmail({type: "USER_INPUT", emailValue: event.target.value})
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);   
  
  };

  const validateEmailHandler = () => {
    dispatchEmail({type: "INPUT_BLUR"})
  };

  const validatePasswordHandler = () => { 
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, enteredPassword);
  };


  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ''}`}> 
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;