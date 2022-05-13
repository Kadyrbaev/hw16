
import AuthContext from '../../store/auth-context'
import React, { useContext } from 'react';
import './ToggleSwitch.css';


const ToggleSwitch = () => {

const context  = useContext(AuthContext)

  return (
    <>
      <input onClick={context.Toggle}
        
        className={`react-switch-checkbox `}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={`react-switch-label  ${context.switchCard===false ? "red" : "black"}`}
        htmlFor={`react-switch-new`}
      >
        <span className='react-switch-button'/>
      </label>
    </>
  );
};

export default ToggleSwitch;
