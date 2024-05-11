import React, { useState } from 'react'
import { Eye, EyeSlash, XCircle } from 'react-bootstrap-icons';
import "../signup/signup.css"
import "./changepassword.css"
import { useNavigate } from 'react-router-dom';

export const ChnagePasswordModal = ({closeComponent}) => {

  const navigate =  useNavigate()
  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)
  const [input, setInput] = useState({
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    password: '',
    confirmPassword: ''
  })
  const [close, setclose] =useState(false)

  const handleClose = ()=>{
    setclose(!close)
  }

  const handleClick = ()=>{
    setToggle(!click)
  }
  const handleVisible = ()=>{
    setVisible(!visible)
  }

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


const handleSubmitForm = async (e) => {
  e.preventDefault(); 

  validateInput({ target: { name: 'password', value: input.password } });
  validateInput({ target: { name: 'confirmPassword', value: input.confirmPassword } });

  setError(prevError => ({
    ...prevError,
    password: error.password,
    confirmPassword: error.confirmPassword
  }));

  if (!error.username && !error.password && !error.confirmPassword) {
    try{
      const response = await fetch("https://api.foodgrab.africa/merchants/api/v1/",{
        method: 'POST',
        headers:{
          'content-Type':'application/json'
        },
        body: JSON.stringify({
          password: input.password
        })
      })
      if (!response.ok){
        throw new Error('change password request failed');
      }
      setInput({
        password: '',
        confirmPassword: ''
      });

      navigate('/Merchantlogin')

    }catch{
     console.error("Change Password failed", error)
    }
  }
};

const ClosePfModal = ()=>{
  return(
    <div>
    <XCircle className={"closechpsw"} onClick={closeComponent}/>
    </div>
  )
}


  return (
    <div className={close ?"not-active":"changepasswordmodal"}>
     <div className={"overlay"} onClick={closeComponent}></div>
      <div className={"changeps"}>
      <ClosePfModal onClick={handleClose}/>
        <p className='txt2'>Change Password</p>
        <p className='ppsubtxt'>Change Password and continue enjoying!!</p>

        <form
        method='POST'
        onSubmit={handleSubmitForm}>
            <div className={"pass2"} >
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
          <div className={"eye2"} >
            <Eye className={click? 'see2 is-visible' : "unsee2"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
            <EyeSlash className={ click ? 'unsee2': "see2"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
          </div>
        </div>
        {error.password && <span className='err2'>{error.password}</span>}
        <div className={"pass2"} >
          <input 
            value={input.confirmPassword} 
            onChange={onInputChange}
            type={visible ? "text": "password"}
            name='confirmPassword'
            placeholder='confirm password' 
            className='in b' 
            required
          />
          <div className={"eye2"} >
            <Eye className={click? 'see2 is-visible' : "unsee2"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
            <EyeSlash className={ click ? 'unsee2': "see2"} onClick={()=>{
              handleVisible();
              handleClick()
            }} />
          </div>
        </div>
        {error.password && <span className='err2'>{error.confirmPassword}</span>}
        <button className='chpswbutt'>Change Password</button>
        </form>
      </div>
      {closeComponent && close}
    </div>
  )
}
