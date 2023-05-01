import React from 'react'
import { Link } from 'react-router-dom'
import Authlayout from '../components/authlayout'

export default function Signup() {
  return (
     <Authlayout >
            <div className='lg:flex flex-col w-full p-6 hidden '>
            <p className='self-end'>Don’t have an acount? <Link to={'/'} className='underline'>Sign in</Link>   </p>
            <h1 className='text-xl font-extrabold'>Sign in</h1>
            <span className='m-auto flex flex-col justify-center items-center'>
                <div className='flex gap-3 border-black border-4 w-fit pt-1 pb-1 pl-10 pr-10 rounded-full cursor-pointer'>
                    <span>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.501 12.7332C22.501 11.8699 22.4295 11.2399 22.2748 10.5865H12.2153V14.4832H18.12C18.001 15.4515 17.3582 16.9099 15.9296 17.8898L15.9096 18.0203L19.0902 20.435L19.3106 20.4565C21.3343 18.6249 22.501 15.9298 22.501 12.7332" fill="#4285F4"/>
                            <path d="M12.214 23C15.1068 23 17.5353 22.0666 19.3092 20.4567L15.9282 17.8899C15.0235 18.5083 13.8092 18.9399 12.214 18.9399C9.38069 18.9399 6.97596 17.1083 6.11874 14.5766L5.99309 14.5871L2.68583 17.0954L2.64258 17.2132C4.40446 20.6433 8.0235 23 12.214 23Z" fill="#34A853"/>
                            <path d="M6.12046 14.5767C5.89428 13.9234 5.76337 13.2233 5.76337 12.5C5.76337 11.7767 5.89428 11.0767 6.10856 10.4234L6.10257 10.2842L2.75386 7.7356L2.64429 7.78667C1.91814 9.21002 1.50146 10.8084 1.50146 12.5C1.50146 14.1917 1.91814 15.79 2.64429 17.2133L6.12046 14.5767" fill="#FBBC05"/>
                            <path d="M12.2141 6.05997C14.2259 6.05997 15.583 6.91163 16.3569 7.62335L19.3807 4.73C17.5236 3.03834 15.1069 2 12.2141 2C8.02353 2 4.40447 4.35665 2.64258 7.78662L6.10686 10.4233C6.97598 7.89166 9.38073 6.05997 12.2141 6.05997" fill="#EB4335"/>
                        </svg>
                    </span>
                    <p>
                        Continue with Google
                    </p>
                </div>
                <div className='flex gap-3 border-black border-4 w-fit pt-1 pb-1 pl-10 pr-10 rounded-full mt-5 justify-center items-center cursor-pointer'>
                    <span>
                        <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.7887 28.5C8.55374 28.5 5.53817 27.5591 3 25.9356C5.15499 26.0751 8.95807 25.7411 11.3236 23.4848C7.76508 23.3215 6.16026 20.5923 5.95094 19.426C6.25329 19.5426 7.6953 19.6826 8.50934 19.356C4.4159 18.3296 3.78793 14.7373 3.92748 13.641C4.695 14.1775 5.99745 14.3641 6.50913 14.3174C2.69479 11.5882 4.06703 7.48276 4.74151 6.59635C7.47882 10.3887 11.5812 12.5186 16.6564 12.637C16.5607 12.2174 16.5102 11.7804 16.5102 11.3316C16.5102 8.11092 19.1134 5.5 22.3247 5.5C24.0025 5.5 25.5144 6.21275 26.5757 7.35284C27.6969 7.09011 29.3843 6.47507 30.2092 5.9432C29.7934 7.43611 28.4989 8.68149 27.7159 9.14308C27.7224 9.15878 27.7095 9.12731 27.7159 9.14308C28.4037 9.03904 30.2648 8.68137 31 8.18256C30.6364 9.02125 29.264 10.4157 28.1377 11.1964C28.3473 20.4381 21.2765 28.5 11.7887 28.5Z" fill="#47ACDF"/>
                        </svg>
                    </span>
                    <p>
                        Continue with Twitter
                    </p>
                </div>
                <span className='flex  justify-center items-center w-fit gap-4 self-center mt-4'>
                <hr className='w-52 border-black'/>
                    <p>Or</p>
                <hr className='w-52 border-black'/>
                </span>
                <form action="" className='flex flex-col gap-3'>
                <span className='flex flex-col'>
                    <label htmlFor="">Fullname</label>
                    <input type="text" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                </span>
                <span className='flex flex-col'>
                    <label htmlFor="">Email</label>
                    <input type="email" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                </span>
                <span className='flex flex-col'>
                    <label htmlFor="">Password</label>
                    <input type="password" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                </span>
                <span className='flex flex-col'>
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                </span>
                <Link to={'/forgotpassword'} className='self-end underline'>forgot password</Link>
                <button className='bg-[#C3C3C3] p-20 pt-3 pb-3 w-fit rounded-md'>
                    Signup
                </button>
                <p>Do you have an acount? <Link to={'/'} className='underline'>Sign in</Link></p>
            </form>
            </span>
            </div> 
            {/* mobile view below */}
            <div className='bg-amber-50 w-screen  lg:hidden absolute top-60 rounded-2xl p-6 '>
                    <form action="" className='flex flex-col gap-3 justify-center items-center'>
                        <span className='flex flex-col'>
                            <label htmlFor="">Fullname</label>
                            <input type="text" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                        </span>
                        <span className='flex flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="email" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                        </span>
                        <span className='flex flex-col'>
                            <label htmlFor="">Password</label>
                            <input type="password" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                        </span>
                        <span className='flex flex-col'>
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" className='border-stone-950 border-2 w-72 h-10 rounded-md pl-2' />
                        </span>
                        <button className='bg-[#C3C3C3] p-20 pt-3 pb-3 w-fit rounded-md'>
                            Signup
                        </button>
                        <p>Do you have an acount? <Link to={'/'} className='underline'>Sign in</Link></p>
                    </form>
            </div>
    </Authlayout>
  )
}
