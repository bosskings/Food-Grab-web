import React, { useEffect, useState } from 'react'
import MAIL from "../media/mail.png"
// import GOOGLE from "../media/google.png"
import "./login.css"
import { Eye, EyeSlash } from 'react-bootstrap-icons'
import { Link, useNavigate} from 'react-router-dom'




export const Login = () => {
  const navigate = useNavigate()

  const [password, setPassword]= useState("")
  const [successMssg, setSuccessMssg] = useState('')
  const [isLoading, setIsLoading]= useState(false)
  const [email, setEmail] = useState("")
  const [visible, setVisible] = useState(false)
  const [click, setToggle] = useState(false)
  const [error, setError] = useState("")
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleClick = ()=>{
    setToggle(!click)
  }
  const handleVisible = ()=>{
    setVisible(!visible)
  }
    const handleSubmit = async (e)=>{
      e.preventDefault()
      setError('')
    
  
      try{
  
        const response = await fetch('https://api.foodgrab.africa/merchants/api/v1/signin',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body:JSON.stringify({email,password,rememberMe})
        })
        if (response.ok || response.status === 200){
  
          const data = await response.json();
          localStorage.setItem('token', JSON.stringify(data));
          console.log(data)
          localStorage.setItem('loginSuccess', 'true')
          navigate('/Dashboard')
        }else{
          const data = await response.json();
          setError(data.mssg)
          setTimeout(()=> setError(''),3000)
        }
      } catch(error) {
        console.error('Error:', error);
        setError('An error occurred while logging in.')
      }
    }
  

    //=============== SUCCESS MSSG ======== 

    useEffect(()=>{
      const storedMssg = localStorage.getItem('successMssg')
      if(storedMssg){
        setSuccessMssg(JSON.parse(storedMssg))
      }
    },[])

    useEffect(()=>{
      const storedMssg = localStorage.getItem('changePassword')
      if (storedMssg){
        setSuccessMssg('Password Changed')
        setTimeout(()=> setSuccessMssg(''),3000)
        localStorage.removeItem('changePassword')
      }
    },[])


  return (
    <div className='loginbody'>
    {error && <div className='error'> {error} </div> }
    {successMssg && <p className={"successmssg"}>{successMssg}</p>}
    
      <h1>Log In</h1>

      <p>Enter your credentials to access your account</p>
      <form className='formcont' onSubmit={handleSubmit}>
        <label className='lab'>EMAIL ADDRESS</label>
        <div className={"mailbox"} >
        <input 
        type='email' 
        placeholder='email' 
        className='in a' 
        required
        onChange={(e)=> setEmail(e.target.value)}
        />
        <div className={"mail"}>
        <img src={MAIL} alt=''/>
        </div>
        </div>
        <label className='lab'>PASSWORD</label>
        <div className={"pass"} >
        <input 
        value={password} 
        onChange={(e)=> setPassword(e.target.value)} 
        type={visible ? "text": "password"}
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
        <div className={'boxcont'}>
        <div className={"first"}>
          {/* <input 
          type='checkbox' 
          className={"check"}
          checked={rememberMe} 
          onChange={(e) => setRememberMe(e.target.checked)}
          />
          <p>Remember me for 30 days</p> */}
          </div>
          <Link to={""}>
          <div className='forgot'>
            Forgot password?
          </div>
          </Link>
        </div>
        <button type='submit' className={"login"} >
          {isLoading=== true ? '...Loading' : 'Log into Account'}
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
        <p>Are you new here?</p>
        <Link to={"/Merchantsignup"}>
        Create Account
        </Link>
      </div>
      </div>
    </div>
  )
}

