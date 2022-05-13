import AuthContext from '../../store/auth-context'
import Navigation from './Navigation';
import classes from './MainHeader.module.css';
import ToggleSwitch from '../toggle/ToggleSwitch';
import React, {useContext} from 'react'


const MainHeader = () => {
  const context  = useContext(AuthContext)
  return (
    <header style={{backgroundColor: context.switchCard ? "#2c272d" : ''}} className={classes ['main-header']}>
      <h1>A Typical Page</h1>
     
      <Navigation  /> 
      <ToggleSwitch />
    </header>
  );

};

export default MainHeader;
