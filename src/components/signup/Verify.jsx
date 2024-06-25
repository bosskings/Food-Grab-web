import React, { useEffect, useState } from 'react';
import './verify.css';
import Image from "../media/mail2.jpg";
import { json, useNavigate, } from 'react-router-dom';

export const Verify = () => {
  const [verification, setVerification] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('')
  const [successMssg, setSucessMssg] = useState('')
  const navivgate = useNavigate()

  useEffect(() => {
    const storedEmail = localStorage.getItem('newEmail');
    if (storedEmail) {
      setEmail(JSON.parse(storedEmail))
    }
  }, []);

    const handleSubmit = async (event) => {

      event.preventDefault();
  
      try {
        const response = await fetch('https://api.foodgrab.africa/merchants/api/v1/verifyEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: email,
            code: verification,
          })
        });
        if (response.ok) {
          navivgate('/Merchantlogin')
          setSucessMssg('Verification Successful');
        } else {
          const data = await response.json();
          setErrorMessage(data.message || 'Verification Failed');
          localStorage.setItem('successMssg', JSON.stringify(data.message))
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  const handleResend = async ()=>{
    try{
      const response = await fetch('https://api.foodgrab.africa/merchants/api/v1/verifyEmail',{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          code: verification,
        })
      })
      if(response.ok){
        setSucessMssg('Resend request successful')
        
      }else{
        setErrorMessage('Failed to send Request')
      }
    }
    catch (error){
      console.error('Error:',error)
    }
  }

  return (
    <div className={"verifybox"}>
      <div className={'verifyCont'}>
      {errorMessage && <p className={"errormessage"}>{errorMessage}</p>}
        <p className={"txt2"}>Verification</p>
        <div className='Vrifyimg'>
          <img src={Image} alt='' />
        </div>
        <form
          className={"verifyForm"}
          onSubmit={handleSubmit}>
          
        <p className='subtxt2'>We sent a 4 digit pin code to the email you provided <span>{email}</span> </p>

          <input
            type='text'
            name='code'
            required
            value={verification}
            onChange={(e) => setVerification(e.target.value)}
          />
          <button type="submit" className={"verifyBTN"}> Verify  </button>
          <p className={"subtxt2"}>Didn't receive any code <span className='resend' onClick={handleResend}>Resend Code !</span></p>
        </form>
      </div>
    </div>
  );
};
