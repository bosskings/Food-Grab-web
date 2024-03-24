import React, { useState } from 'react'
import MAIL from "../media/mail.png"
import GOOGLE from "../media/google.png"
import ERROR from "../media/error.jpg"
import "./signup.css"
import { Eye, EyeSlash, Twitter } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import { use } from 'i18next'


export const Signup = () => {
  const navigate =  useNavigate();
  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)

  const [input, setInput] = useState({
    username: '',
    emial: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
  }
 const onBlurValidate = e =>{
  validateInput(e)
 }
 const validateInput = e => {
  let { name, value } = e.target;
  setError(prev => {
    const stateObj = { ...prev, [name]: "" };

    switch (name) {
      case "username":
        if (!value) {
          stateObj[name] = "Please enter Username.";
        } else {
          stateObj[name] = ""; 
        }
        break;

      case "email":
        if(!value){
          stateObj[name]= "please enter an email"
        }else {
          stateObj=[name] = "";
        }
        break;

      case "password":
        if (!value) {
          stateObj[name] = "Please enter a Password.";
        } else {
          stateObj[name] = ""; 
        }
        break;

      case "confirmPassword":
        if (!value) {
          stateObj[name] = "Confirm Password.";
        } else if (value !== input.password) {
          stateObj[name] = "Password and Confirm Password do not match.";
        } else {
          stateObj[name] = ""; 
        }
        break;

      default:
        break;
    }

    return stateObj;
  });
};

  

  const handleClick = ()=>{
    setToggle(!click)
  }
  const handleVisible = ()=>{
    setVisible(!visible)
  }

  

  const handleSubmitForm = async (e) => {
    e.preventDefault(); 

    validateInput({ target: { name: 'username', value: input.username } });
    validateInput({ target: { name: 'email', value: input.emial } });
    validateInput({ target: { name: 'password', value: input.password } });
    validateInput({ target: { name: 'confirmPassword', value: input.confirmPassword } });

    setError(prevError => ({
      ...prevError,
      username: error.username,
      password: error.password,
      confirmPassword: error.confirmPassword
    }));

    if (!error.username && !error.password && !error.confirmPassword) {
      try{
        const response = await fetch("https://foodgrab.africa/merchants/api/v1/signup",{
          method: 'POST',
          headers:{
            'content-Type':'application/json'
          },
          body: JSON.stringify({
            username: input.username,
            email: input.emial,
            password: input.password
          })
        })
        if (!response.ok){
          throw new Error('Signup request failed');
        }
        setInput({
          username: '',
          password: '',
          confirmPassword: ''
        });

        navigate ('/Merchantlogin')
        
      }catch{
       console.error("signup failed", error)
      }
    }
  };

  
  return (
    <div className='signupbody'>
      <h1>Sign Up</h1>
      <p>Create account</p>
      <form 
        className='formcont2'
        method='POST'
        onSubmit={handleSubmitForm}
      >
        <label className='lab2'> FULL NAME</label>
        <div className={"mailbox"} >
          <input 
            type='text' // Changed type to 'text'
            name="username"
            value={input.username}
            onChange={onInputChange}
            onBlur={onBlurValidate}
            placeholder='Enter Name' 
            className='in a' 
            required
          />
        </div>
        {error.username && <span className='err'>{error.username}</span>}
  
        <label className='lab2'>EMAIL ADDRESS</label>
        <div className={"mailbox"} >
          <input 
            type='email' // Keep type as 'email' for email input
            placeholder='email' 
            className='in a' 
            required
          />
          <div className={"mail"}>
            <img src={MAIL} alt=''/>
          </div>
        </div>
  
        <label className='lab2'>PASSWORD</label>
        <div className={"pass"} >
          <input 
            value={input.password} 
            onChange={onInputChange}
            onBlur={onBlurValidate}
            type={visible ? "text": "password"}
            name='password'
            placeholder='enter password' 
            className='in b' 
            required
          />
          <div className={"eye"} >
            <Eye className={click? 'see is-visible' : "unsee"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
            <EyeSlash className={ click ? 'unsee': "see"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
          </div>
        </div>
        {error.password && <span className='err'>{error.password}</span>}
  
        <div className={"pass"} >
          <input 
            value={input.confirmPassword} 
            onChange={onInputChange}
            onBlur={onBlurValidate}
            type={visible ? "text": "password"}
            name='confirmPassword'
            placeholder='confirm password' 
            className='in b' 
            required
          />
          <div className={"eye"} >
            <Eye className={click? 'see is-visible' : "unsee"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
            <EyeSlash className={ click ? 'unsee': "see"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
          </div>
        </div>
        {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
        {}
          <button type='submit' className={"login"}>
            Create Account
          </button>
      </form>
      <div className={"bottom2"}>
        <div className={"linebox"} >
          <div className='line'></div> Or <div className='line'></div>
        </div>
        <button className={"gog"}>
          <img src={GOOGLE} alt=''/>Continue with Google
        </button>
        <button className={"twit"}>
          <Twitter className={"twiticon"}/> Continue with Twitter
        </button>
        <div className={"signlink"}>
          <p>Already Have an Account</p>
          <Link to={"/Merchantlogin"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
 }