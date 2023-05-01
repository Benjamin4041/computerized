import React from 'react'
import Authlayout from '../components/authlayout'
import { Link } from 'react-router-dom'

export default function Forgotpass() {
  return (
    <div>
        <Authlayout>
            <div className='flex justify-center items-center flex-col w-full'>
                <h1 className='text-3xl font-extrabold mb-4 '>Forgot Password</h1>
                <form action="">
                <span className='flex flex-col mb-4'>
                        <label htmlFor="">Email</label>
                        <input type="email" className='border-stone-950 border-2 w-60 h-10 rounded-md pl-2' />
                </span>
                <p className='mb-4'>I can remeber my password click<Link to={'/'} className='underline'> Sign in</Link></p>
                <button className='bg-[#C3C3C3] p-20 pt-3 pb-3 w-fit rounded-md'>Submit</button>
                </form>
                
            </div>
        </Authlayout>
    </div>
  )
}
