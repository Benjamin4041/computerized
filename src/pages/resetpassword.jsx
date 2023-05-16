import React, { useState } from 'react'
import Authlayout from '../components/authlayout'
import {AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import {  useParams } from 'react-router-dom'

export default function Resetpassword() {
    const [password,setPassword]=useState()
    const [confirmpassword,setConfirmPassword]=useState()
    const [showPass,setShowPass] = useState(false)
    const [showPass2,setShowPass2] = useState(false)
    const {id,token} = useParams()
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let resetPass=(e)=>{
        e.preventDefault()
        fetch(`https://crns2.onrender.com/rest-password/${id}/${token}`,{
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                password,
                confirmpassword,
            }),
            redirect: 'follow'
          })
        .then(response => response.json())
        .then(result => console.log(result))
        .catch((err)=>{
            console.log(err)
        })
    }
  return (

        <Authlayout>
            <div className='flex justify-center items-center lg:w-2/4'>
                <div className='lg:block hidden'>
                    <form action="" className='flex flex-col gap-3'>
                    <span>
                        <p>New password</p>
                        <span className='relative'>
                            <div className='absolute  left-44 pt-2 pr-3 cursor-pointer w-fit' onClick={()=>{
                                showPass===false?setShowPass(true):setShowPass(false)
                            }}>
                                <AiFillEyeInvisible className={showPass===false?"hidden":''} size={20}/>
                                <AiFillEye className={showPass===false?"":'hidden'}  size={20}/>
                            </div>
                            <input type={showPass===true?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-slate-400 w-[13.2rem] h-8 rounded-lg pl-2' />
                        </span>
                        
                    </span>
                        <span>
                            <p>Confirm password</p>
                            <span className='relative'>
                            <div className='absolute  left-44 pt-2 pr-3 cursor-pointer w-fit' onClick={()=>{
                                showPass2===false?setShowPass2(true):setShowPass2(false)
                            }}>
                                <AiFillEyeInvisible className={showPass2===false?"hidden":''} size={20}/>
                                <AiFillEye className={showPass2===false?"":'hidden'}  size={20}/>
                            </div>
                            <input type={showPass2===true?"text":"password"} value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='bg-slate-400 w-[13.2rem] h-8 rounded-lg pl-2'/>
                        </span>
                            
                        </span>
                        <button className='bg-[#C3C3C3] p-3 rounded-md mt-4' onClick={resetPass} >Change Password</button>
                    </form>
                </div>
                <div className="bg-amber-50 w-screen md:w-4/5 md:translate-x-32 left-0  lg:hidden absolute top-60 rounded-2xl p-6 ">
                    <form action="" className='flex flex-col gap-3'>
                    <span>
                        <p>New password</p>
                        <span className='relative flex flex-col'>
                            <div className='absolute   pt-2 pr-3 cursor-pointer w-fit self-end' onClick={()=>{
                                showPass===false?setShowPass(true):setShowPass(false)
                            }}>
                                <AiFillEyeInvisible className={showPass===false?"hidden":''} size={20}/>
                                <AiFillEye className={showPass===false?"":'hidden'}  size={20}/>
                            </div>
                            <input type={showPass===true?"text":"password"} value={password} onChange={(e)=>setPassword(e.target.value)} className='bg-slate-400 w-full h-8 rounded-lg pl-2' />
                        </span>
                        
                    </span>
                        <span>
                            <p>Confirm password</p>
                            <span className='relative flex flex-col'>
                            <div className='absolute pt-2 pr-3 cursor-pointer w-fit self-end' onClick={()=>{
                                showPass2===false?setShowPass2(true):setShowPass2(false)
                            }}>
                                <AiFillEyeInvisible className={showPass2===false?"hidden":''} size={20}/>
                                <AiFillEye className={showPass2===false?"":'hidden'}  size={20}/>
                            </div>
                            <input type={showPass2===true?"text":"password"} value={confirmpassword} onChange={(e)=>setConfirmPassword(e.target.value)} className='bg-slate-400 w-full h-8 rounded-lg pl-2'/>
                        </span>
                            
                        </span>
                        <button className='bg-[#C3C3C3] p-3 rounded-md mt-4' onClick={resetPass}>Change Password</button>
                    </form>
                </div>
            </div>

        </Authlayout>
  )
}
