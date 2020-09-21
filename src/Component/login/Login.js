import React, { useContext, useState } from 'react';
import { ContextElement } from '../../App';
import './Login.css';
import { TextField, Checkbox, Button } from '@material-ui/core';
import fbIcon from '../images/Icon/fb.png';
import googleIcon from '../images/Icon/google.png';
import LoginElement from '../LoginElement./LoginElement';
import SignupElement from '../SignupElement./SignupElement';
import {
  handleFacebookSignin,
  signInWithEmailAndPassword,
  initializeLoginFramework,
  createUserWithEmailAndPassword,
  handleSignOut,
  handleGoogleSignIn,
} from "./loginFirebaseManager";
import { useHistory, useLocation } from 'react-router-dom';

 initializeLoginFramework();
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

  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const [newUser, setNewUser] = useState(true);
  const handle = () => {
    setNewUser(!newUser)
  }
  const [user, setUser] = useState({
    isLogin: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
    newUser: newUser,
  });

  const handleSubmit = (e) => {
    if (!newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password).then(
        (res) => {
          console.log(res)
          setUser(res);
          setUserLoginInfo(res);
          history.replace(from);
        }
      );
    }
    if (newUser && user.email && user.password) {
      console.log('signIn is clicked')
      signInWithEmailAndPassword(user.email, user.password).then((res) => {
        console.log(res)
        setUser(res);
        setUserLoginInfo(res);
        history.replace(from);
      });
    }
    e.preventDefault();
  };
  const GoogleSignIn = () => {
    handleGoogleSignIn()
    .then((res) => {
     setUser(res);
     setUserLoginInfo(res);
      history.replace(from);
    });
  };

  const signOut = () => {
    handleSignOut().then((res) => {
      setUser(res);
     setUserLoginInfo(res);
    });
  };

  let filedValidation = true;
  const handleBlur = (event) => {
    if (event.target.name === "email") {
      filedValidation = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      const passwordLength = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      filedValidation = passwordLength && passwordHasNumber;
    }
    if (filedValidation) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };

  const facebookSignIn = () => {
    handleFacebookSignin().then((res) => {
      console.log(res)
      setUser(res);
      setUserLoginInfo(res);
      history.replace(from);
    });
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
      <div className="logBox" style={{ textAlign: "center" }}>
        {userLoginInfo.isLogin ? (
          <Button style={style.loginBtn} color ='secondary' onClick ={signOut}>Sign Out</Button>
        ) : (
          <div className="logInfo">
            {newUser ? (
              <LoginElement
                handle={handle}
                handleOnBlur={handleBlur}
                handleSubmit={handleSubmit}
              ></LoginElement>
            ) : (
              <SignupElement
                handle={handle}
                handleOnBlur={handleBlur}
                userInfo={user}
                handleSubmit={handleSubmit}
              ></SignupElement>
            )}
            <hr />
            <br />
            <Button style={style.loginBtn} onClick={facebookSignIn}>
              <img style={style.icon} src={fbIcon} alt="" />
              Continue with facebook
            </Button>
            <br />
            <br />
            <Button style={style.loginBtn} onClick={GoogleSignIn}>
              <img style={style.icon} src={googleIcon} alt="" />
              Continue with google
            </Button>
          </div>
        )}
      </div>
    );
};

export default Login;