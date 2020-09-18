import React, { useContext, useState } from 'react';
import { ContextElement } from '../../App';
import './Login.css';
import { TextField, Checkbox, Button } from '@material-ui/core';
import fbIcon from '../images/Icon/fb.png';
import googleIcon from '../images/Icon/google.png';
import LoginElement from '../LoginElement./LoginElement';
import SignupElement from '../SignupElement./SignupElement';
import { google } from './loginFirebaseManager';

const Login = () => {
  const [
    headerNav,
    setHeaderNav,
    days,
    setDays,
    userLoginInfo,
    setUserLoginInfo,
  ] = useContext(ContextElement);

  setHeaderNav(true);
  
  const [signIn, setSignIn] = useState(true);
  const handle = () => {
    setSignIn(!signIn)
  }

  

  const googleSignIn = () => {
    console.log('google sign is clicked')
      google()
    .then(res => {
      const {displayName, photoURL, email} = res.user
      console.log(res.user)
      const signIn = {
        name: displayName,
        photoURL: photoURL,
        email: email,
        isLogin: true,
      }
      setUserLoginInfo(signIn);
        
   })
  }

  const facebookSignIn = () => {
     console.log("facebook sign is clicked");
  }

    const style = {
      loginBtn: {
        border: "1px solid gray",
        borderRadius: "50px",
        width: "380px",
        justifyContent: "center",
      },
      icon: {
        width: "25px",
        marginRight: "50px",
      },
      textField: {
        width: "400px",
      },
      btn: {
        width: "400px",
        backgroundColor: "#F9A51A",
      },
    };
    return (
      <div className="logBox">
        <div className="logInfo">
          {signIn ? <LoginElement handle ={handle}></LoginElement>
          : <SignupElement handle ={handle}></SignupElement>}
          
          <hr />
          <br />
          <Button style={style.loginBtn} onClick={facebookSignIn}>
            <img style={style.icon} src={fbIcon} alt="" />
            Continue with facebook
          </Button>
          <br />
          <br />
          <Button style={style.loginBtn} onClick={googleSignIn}>
            <img style={style.icon} src={googleIcon} alt="" />
            Continue with google
          </Button>
        </div>
       
      </div>
    );
};

export default Login;