import React, { useContext, useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import './Login.css'
import { Button } from 'react-bootstrap';
import logo from '../../images/fb.png';
import png from '../../images/google.png';
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
const Login = () => {

    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  const [newUser,setNewUser] = useState(false);
    const [user,setUser] = useState({
        isSignIn : false,
        name : '',
        email : '',
        photo : '',
        password : '',
        error : ''
       
    })
    const  provider = new firebase.auth.GoogleAuthProvider();
    const  fbprovider = new firebase.auth.FacebookAuthProvider();
    const handleFacebookSignIn = ()=>{
        firebase.auth().signInWithPopup(fbprovider)
        .then(res=> {
        const {displayName,email,photoURL} = res.user;
        const signInUser = {
            isSignIn : true,
            name: displayName,
            email : email,
            photo : photoURL       
        }
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
        console.log( 'facebook', displayName,email)
          }).catch(function(error) {
            
            var errorCode = error.code;
            var errorMessage = error.message;
            
            var email = error.email;
          
          });
    }
    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(provider)
        
            .then(res=> {
                const {displayName,email,photoURL} = res.user;
                const signInUser = {
                    isSignIn : true,
                    name: displayName,
                    email : email,
                    photo : photoURL       
                }
                setUser(signInUser);
                setLoggedInUser(signInUser);
                history.replace(from);
                console.log(  'google', displayName,email)
                  }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
        
            var email = error.email;

            var credential = error.credential;
            // ...
          });
    }
const handleBlur = (e)=>{
    let isFormValid = true;
if (e.target.name === 'email'){
 isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
console.log(isFormValid)
}if(e.target.name === 'password'){
 const passwordValid = e.target.value.length > 6;
 isFormValid = passwordValid;
console.log(isFormValid)
}
if (isFormValid){
    const newUserInfo = {...user};
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo)
}
};

const handleSubmit = (e)=>{
if(newUser && user.email && user.password){
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    
    .then(res=> {
        const {displayName,email,photoURL} = res.user;
        const signInUser = {
            isSignIn : true,
            name: displayName,
            email : email,
            photo : photoURL       
        }
        setUser(signInUser);
        setLoggedInUser(signInUser);
        history.replace(from);
        console.log(   displayName,email)
          })
    
    
    .catch(function(error) {
       const newUserInfo = {...user};
       newUserInfo.errror = error.message;
       setUser(newUserInfo)
       
      });
}
if (!newUser && user.email && user.password){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(res=> {
        const {displayName,email,photoURL} = res.user;
        const signInUser = {
            isSignIn : true,
            name: displayName,
            email : email,
            photo : photoURL       
        }
        setUser(signInUser);
        setLoggedInUser(signInUser)
        history.replace(from);
        console.log(  displayName,email)
          })
    
    
          .catch(function(error) {
            const newUserInfo = {...user};
            newUserInfo.errror = error.message;
            setUser(newUserInfo)
            
           });
}
e.preventDefault();
}
    return (
        <div className="container">
            <div className="row">  
        <div className="form">
           
                <form className="login-form" onClick={handleSubmit}>
                   { newUser ?
                      <div>
                           <h4>Login</h4> <input type="text" name="first-name" placeholder="your name" onBlur={handleBlur} required /> 
                        <input type="text" placeholder="enter your zip code" required/>
  
                      </div>: <h4>Create an account</h4>}
                        <input type="email" onBlur={handleBlur} name="email"placeholder="your email"  id="" required />
                        <br/>
                        <input type="password" onBlur={handleBlur} name="password" placeholder="your password"  id="" required />
                        <br/>
                    <br/>               
                    <input type="submit" className="change-input" value={newUser?'submit':'submit'}/>

                </form>
                    <h6>Don't have account? <p className="login" onClick={()=>setNewUser(!newUser)}> {newUser?'Login':'create an account'} </p>  </h6>
            <Button variant="dark"  onClick={handleGoogleSignIn}> <img className="logo" src={png} alt=""/> Google Sign In</Button>
            <br/> <br/>
            <Button variant="dark"  onClick={handleFacebookSignIn}> <img src={logo} className="logo" alt=""/> Login By Facebook</Button>
        </div>
        </div>
        </div>
    );
};

export default Login;