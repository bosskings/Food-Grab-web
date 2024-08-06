import React, { useState } from 'react'
import { Eye, EyeSlash, XCircle } from 'react-bootstrap-icons';
import "../signup/signup.css"
import "./changepassword.css"
import { useNavigate } from 'react-router-dom';

export const ChnagePasswordModal = ({closeComponent}) => {

  const navigate =  useNavigate()
  let [token, setAuthTokens] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)
  const [isLoading, setIsLoading]= useState(false)
  const [errMssg, setErrMssg] = useState("")
  const [input, setInput] = useState({
    oldPassword: '',
    newPassword:'',
    confirmPassword: ''
  }); 
  const [error, setError] = useState({
    oldPassword: '',
    newPassword:'',
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
      case "oldPassword":
        if (!value) {
          stateObj[name] = "Please enter your Password.";
        }
        break;

      case "newPassword":
        if (!value) {
          stateObj[name] = "please enter a new Password";
        }
        break;

      case "confirmPassword":
        if (!value) {
          stateObj[name] = "Confirm Password.";
        } else if (value !== input.newPassword) {
          stateObj[name] = "Password and Confirm Password do not match.";
        } 
        break;

      default:
        break;
    }

    return stateObj;
  });
};

const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  navigate('/Merchantlogin');
};


const handleSubmitForm = async (e) => {
  e.preventDefault(); 

  validateInput({ target: { name: 'oldPassword', value: input.oldPassword } });
  validateInput({ target: { name: 'newPassword', value: input.newPassword } });
  validateInput({ target: { name: 'confirmPassword', value: input.confirmPassword } });

  setError(prevError => ({
    ...prevError,
    oldPassword: error.oldPassword,
    newPassword: error.newPassword,
    confirmPassword: error.confirmPassword
  }));

  if (!error.oldPassword && !error.newPassword && !error.confirmPassword) {
    try{
      const response = await fetch("https://api.foodgrab.africa/merchants/api/v1/updatePassword",{
        method: 'PATCH',
        headers:{
          'content-Type':'application/json',
          "Authorization": `Bearer ${token.token}`,
        },
        body: JSON.stringify({
          oldPassword: input.oldPassword,
          newPassword: input.newPassword
        })
      })
      const data = await response.json()
      if (!response.ok){
        console.log(data)
        setInput({
          oldPassword: '',
          newPassword: ''
        });
        setIsLoading(true)
        localStorage.setItem('changePassword', 'true')
      }else{
        setErrMssg(data.mssg);
        setIsLoading(false);
      }

    }catch{
      console.error("Change Password failed", error);
      setErrMssg('Password change failed');
      setIsLoading(false);
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
    <div className={close ? "not-active":"changepasswordmodal"}>
     <div className={"overlay"} onClick={closeComponent}></div>
      <div className={"changeps"}>
      {errMssg && <div className='error'> {errMssg} </div> }
      <ClosePfModal onClick={handleClose}/>
        <p className='txt2'>Change Password</p>
        <p className='ppsubtxt'>Change Password and continue enjoying!!</p>

        <form
        method='POST'
        onSubmit={handleSubmitForm}>
            <div className={"pass2"} >
          <input 
            value={input.oldPassword} 
            onChange={onInputChange}
            onBlur={onBlurValidate}
            type={visible ? "text": "password"}
            name='oldPassword'
            placeholder='enter old password' 
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
        {error.oldPassword && <span className='err2'>{error.oldPassword}</span>}
        <div className={"pass2"} >
          <input 
            value={input.newPassword} 
            onChange={onInputChange}
            onBlur={onBlurValidate}
            type={visible ? "text": "password"}
            name='newPassword'
            placeholder='enter new password' 
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
        {error.newPassword && <span className='err2'>{error.newPassword}</span>}
        <div className={"pass2"} >
          <input 
            value={input.confirmPassword} 
            onChange={onInputChange}
            type={visible ? "text": "password"}
            name='confirmPassword'
            placeholder='confirm new password' 
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
        {error.confirmPassword && <span className='err2'>{error.confirmPassword}</span>}
        <button className='chpswbutt' type='submit'> {isLoading === true ? "Loading..." : "Change Password" }</button>
        </form>
      </div>
      {closeComponent && close}
    </div>
  )
}
