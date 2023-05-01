import React from 'react'
import { useNavigate } from 'react-router-dom'
import Auth from '../components/auth'

export default function Home() {
    let navigate=useNavigate()
    // let token = localStorage.getItem("token")

    let handleLogout=()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
    return (
        <Auth>
            <div className='w-screen h-screen lg:bg-inherit bg-center flex flex-col items-center justify-center' style={{backgroundImage:"url('assets/Header Background 1.png')"}}>
                    <span>
                        <h1 className='text-7xl text-center font-extrabold '>Welcome</h1>
                        <div className='scale-50 w-10 lg:scale-90 lg:w-full'>
                            <svg width="538" height="19" viewBox="0 0 538 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17C2 17 334.546 -4.83509 536 4.18335" stroke="#F0B15B" stroke-width="4" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </span>
                    <span className='flex gap-8 pt-7'>
                        <button className='bg-black text-white p-3 rounded' onClick={()=>navigate('/register')}>Register Student</button>
                        <button className='bg-black text-white p-3 rounded' onClick={()=>navigate('/allstudents')}>View all Student</button>
                    </span>
                    <button className='bg-black text-white p-3 rounded mt-10' onClick={handleLogout}>Log out</button>
            </div>
        </Auth>
    )
    
}
