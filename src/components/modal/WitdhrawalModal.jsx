import React, { useState } from 'react'
import "./withdrawlmodal.css"

export const WitdhrawalModal = () => {

  return (
    <div>
       <div className={"wdModalBox"}>
        <div className={"firstHeader"}>
          <p className='txt2'>
          Withdraw
          </p>
          <p className={"pp"}>Withdraw funds to any account provided</p>
        </div>
        <form
        className={"witdrawalForm"}
        onSubmit={""}
        method='POST'
        >
        <label>Account</label>
        <input
          type='text'
          name=''
          placeholder='Enter Your 10 Digit Account Number'
          required
        />
         <label>Bank Name</label>
        <input
          type='text'
          name=''
          placeholder='Bank Name'
          required
        />
        <button type='submit' className={'widthdrawbutton'}>
          withdraw
        </button>
        </form>
       </div>
    </div>
  )
}

