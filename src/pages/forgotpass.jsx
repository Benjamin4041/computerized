import React, { useState } from 'react'
import Authlayout from '../components/authlayout'
import { Link } from 'react-router-dom'

export default function Forgotpass(e) {
  e.preventDefault()
  let [email,setEmail]=useState()
  let sendEmail=()=>{
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  email
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("localhost:3000/forgotpassword?email=anoruokachi2@gmail.com", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  return (
    <div>
        <Authlayout>
            <div className='flex justify-center items-center flex-col w-full'>
                <h1 className='text-3xl font-extrabold mb-4 '>Forgot Password</h1>
                <form action="">
                <span className='flex flex-col mb-4'>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='border-stone-950 border-2 w-60 h-10 rounded-md pl-2' />
                </span>
                <p className='mb-4'>I can remeber my password click<Link to={'/'} className='underline'> Sign in</Link></p>
                <button className='bg-[#C3C3C3] p-20 pt-3 pb-3 w-fit rounded-md' onClick={sendEmail}>Submit</button>
                </form>
                
            </div>
        </Authlayout>
    </div>
  )
}
