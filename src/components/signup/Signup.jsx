import React, { useState } from 'react'
import MAIL from "../media/mail.png"
import GOOGLE from "../media/google.png"
import ERROR from "../media/error.jpg"
import "./signup.css"
import { Eye, EyeSlash, Twitter } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'


export const Signup = () => {
  const navigate =  useNavigate();
  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)

  const [input, setInput] = useState({
    firstname: '',
    lastname:'',
    email: '',
    phone: "",
    NIN: "",
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    firstname: '',
    lastname:'',
    email: '',
    phone: "",
    NIN: "",
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
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    switch (name) {
      case "firstname":
        if (!value) {
          stateObj[name] = "Please enter firstname.";
        } else {
          stateObj[name] = ""; 
        }
        break;

      case "lastname":
        if (!value) {
          stateObj[name] = "Please enter lastname.";
        } else {
          stateObj[name] = ""; 
        }
        break;

      case "phone":
        if (!value) {
          stateObj[name] = "Please enter a valid phone number.";
        } else if(value.length < 0 || value.length > 11 ){
          stateObj[name] = "Please enter a valid phone number."; 
        }else{
          stateObj[name]= ""
        }
        break;

      case "NIN":
        if (!value) {
          stateObj[name] = "Please enter a valid NIN.";
        } else if(value.length > 10 || value.length < 10 ){
          stateObj[name] = "Please enter a valid NIN"; 
        } else{
          stateObj[name]=""
        }
        break;

      case "email":
        if (!value) {
          stateObj[name] = "Please enter an email.";
        } else if (!emailPattern.test(value)) {
          stateObj[name] = "Please enter a valid email address.";
        } else {
          stateObj[name] = "";
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

    validateInput({ target: { name: 'firstname', value: input.firstname } });
    validateInput({ target: { name: 'lastname', value: input.lastname } });
    validateInput({ target: { name: 'email', value: input.email } });
    validateInput({ target: { name: 'phone', value: input.phone } });
    validateInput({ target: { name: 'NIN', value: input.NIN } });
    validateInput({ target: { name: 'password', value: input.password } });
    validateInput({ target: { name: 'confirmPassword', value: input.confirmPassword } });

    setError(prevError => ({
      ...prevError,
      firstname: error.firstname,
      lastname: error.lastname,
      email: error.email,
      phone: error.phone,
      NIN: error.NIN,
      password: error.password,
      confirmPassword: error.confirmPassword
    }));

    if (!error.username && !error.password && !error.confirmPassword) {
      try{
        const response = await fetch("https://api.foodgrab.africa/merchants/api/v1/signup",{
          method: 'POST',
          headers:{
            'content-Type':'application/json'
          },
          body: JSON.stringify({
            firstname: input.firstname,
            lastname: input.lastname,
            email: input.email,
            phone: input.phone,
            NIN: input.NIN,
            password: input.password
          })
        })
        if (!response.ok){
          throw new Error('Signup request failed');
        }
        setInput({
          firstname: '',
          lastname:'',
          email: '',
          phone: "",
          NIN: "",
          password: '',
          confirmPassword: ''
        });

        // navigate('/verify')

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
        <label className='lab2'> FIRST NAME</label>
        <div className={"mailbox"} >
          <input 
            type='text'
            name="firstname"
            value={input.username}
            onChange={onInputChange}
            onBlur={onBlurValidate}
            placeholder='Enter Firstname' 
            className='in a' 
            required
          />
        </div>
        {error.firstname && <span className='err'>{error.firstname}</span>}

        <label className='lab2'> LAST NAME</label>
        <div className={"mailbox"} >
          <input 
            type='text' 
            name="lastname"
            value={input.lastname}
            onChange={onInputChange}
            onBlur={onBlurValidate}
            placeholder='Enter Lastname' 
            className='in a' 
            required
          />
        </div>
        {error.lastname && <span className='err'>{error.lastname}</span>}
  
        <label className='lab2'>EMAIL ADDRESS</label>
        <div className={"mailbox"} >
        <input 
          type='email'
          placeholder='Enter Email'
          name="email"
          className='in a' 
          value={input.email}
          onChange={onInputChange}
          onBlur={onBlurValidate}
          required
        />

          <div className={"mail"}>
            <img src={MAIL} alt=''/>
          </div>
        </div>
        {error.email && <span className='err'>{error.email}</span>}

        <label className='lab2'> PHONE </label>
        <div className={"mailbox"} >
          <input 
            type='text' // Changed type to 'text'
            name="phone"
            value={input.phone}
            onChange={onInputChange}
            onBlur={onBlurValidate}
            placeholder='Enter Phone Number' 
            className='in a' 
            required
          />
        </div>
        {error.phone && <span className='err'>{error.phone}</span>}

        <label className='lab2'> NIN </label>
        <div className={"mailbox"} >
          <input 
            type='text' // Changed type to 'text'
            name="NIN"
            value={input.NIN}
            onChange={onInputChange}
            onBlur={onBlurValidate}
            placeholder='Enter NIN' 
            className='in a' 
            required
          />
        </div>
        {error.NIN && <span className='err'>{error.NIN}</span>}
  
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
        {/* <button className={"gog"}>
          <img src={GOOGLE} alt=''/>Continue with Google
        </button>
        <button className={"twit"}>
          <Twitter className={"twiticon"}/> Continue with Twitter
        </button> */}
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