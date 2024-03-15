import React, { useState } from 'react'
import MAIL from "../media/mail.png"
import GOOGLE from "../media/google.png"
import "./signup.css"
import { Eye, EyeSlash, Twitter } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'
import useForm from '../../UseForm'

const FORM_ENDPOINT = "http://foodgrab.africa/merchants/api/v1/signup"
export const Signup = () => {

  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)

  const [input, setInput] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });
 
  const [error, setError] = useState({
    username: '',
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
          }
          break;
 
        case "password":
          if (!value) {
            stateObj[name] = "Please enter a Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;
 
        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;
 
        default:
          break;
      }
 
      return stateObj;
    });
  }
  

  const handleClick = ()=>{
    setToggle(!click)
  }
  const handleVisible = ()=>{
    setVisible(!visible)
  }

  const additionalData={
    sent: new Date().toISOString()
  }
  const { handleSubmit, status, message } = useForm({
    additionalData,

  });

  if (status === "success") {

    return (

      <>

        <div className="text-2xl">Thank you!</div>

        <div className="text-md">{message}</div>

      </>

    );

  }


  if (status === "error") {

    return (

      <>

        <div className="text-2xl">Something bad happened!</div>

        <div className="text-md">{message}</div>

      </>

    );

  }
  return (
    <div className='signupbody'>
    <h1>Sign Up</h1>
      <p>Create account</p>
      <form 
      className='formcont2'
      action={FORM_ENDPOINT}
      method='POST'
      onSubmit={handleSubmit}>

      <label className='lab2'> FULL NAME</label>
        <div className={"mailbox"} >
        <input 
        type='username' 
        name="username"
        value={input.username}
        onChange={onInputChange}
        onBlur={onBlurValidate}
        placeholder='Enter Name' 
        className='in a' 
        required
        />
        </div>
        {error.password && <span className='err'>{error.username}</span>}

        <label className='lab2'>EMAIL ADDRESS</label>
        <div className={"mailbox"} >
        <input type='email' placeholder='email' className='in a' required/>
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
        }}
        
        />
        </div>
        </div>
        {error.password && <span className='err'>{error.password}</span>}
        <div className={"pass"} >
        <input 
        value={input.confirmPassword} 
        onChange={onInputChange}
        onBlur={validateInput}
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
        }}
        
        />
        </div>
        </div>
        {error.password && <span className='err'>{error.password}</span>}
        {status!== 'loading' && (
        <button type='submit' className={"login"} onClick={validateInput} >
          Create Account
        </button>
        )}
       
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
        <Link to={"/Merchantlgin"}>
        Login
        </Link>
      </div>
      </div>
    </div>
  )
}


