import React, { useState } from 'react'
import logo from '../assets/logo.jpg'
import google from '../assets/google.jpg'
import { IoEyeOutline } from 'react-icons/io5'
import { IoEye } from 'react-icons/io5'

const SignUp = () => {
  const [show, setShow] = useState(false)
  return (
    <div className='bg-[#dddbdb] w-[100vw] h-[100vh] flex items-center justify-center'>
      <form className='w-[90%] md:w-200 h-150 bg-[white] shadow-xl rounded-2xl flex'>
        <div className='md:w-[50%] w-[100%] h-[100%] flex flex-col items-start justify-center gap-3 px-8'>
          <div className='w-full text-center'>
            <h1 className='font-semibold text-[black] text-2xl'>Let's get started</h1>
            <h2 className='text-[#999797] text-[18px]'>Create your account</h2>
          </div>

          {/* Inputs */}
          <div className='flex flex-col gap-1 w-full items-start justify-center'>
            <label className='font-semibold' htmlFor="name">Name</label>
            <input
              type="text"
              id='name'
              className='border w-[80%] h-[35px] border-[#e7e6e6] text-[15px] px-[12px]'
              placeholder='Your name'
            />
          </div>

          <div className='flex flex-col gap-1 w-full items-start justify-center'>
            <label className='font-semibold' htmlFor="email">Email</label>
            <input
              type="email"
              id='email'
              className='border w-[80%] h-[35px] border-[#e7e6e6] text-[15px] px-[12px]'
              placeholder='Your email'
            />
          </div>

          <div className='flex flex-col gap-1 w-full items-start justify-center'>
  <label className='font-semibold' htmlFor="password">Password</label>
  <div className="w-[80%] flex items-center border border-[#e7e6e6] bg-white h-[35px] rounded-sm px-[12px]">
    <input
      type={show ? "text" : "password"}
      id='password'
      className='flex-1 h-full outline-none text-[15px] border-none bg-transparent'
      placeholder='Your password'
    />
    {show ? (
      <IoEye
        className='w-[18px] h-[18px] cursor-pointer text-gray-600'
        onClick={() => setShow(false)}
      />
    ) : (
      <IoEyeOutline
        className='w-[18px] h-[18px] cursor-pointer text-gray-600'
        onClick={() => setShow(true)}
      />
    )}
  </div>
</div>




          <div className='flex w-full items-center justify-center gap-4'>
            <span className='px-[10px] py-[5px] border-[1px] rounded-xl cursor-pointer border-[#e7e6e6] hover:border-black'>Student</span>
            <span className='px-[10px] py-[5px] border-[1px] rounded-xl cursor-pointer border-[#e7e6e6] hover:border-black'>Educator</span>
          </div>
          <div className='w-full flex justify-center'>
            <button className='w-[80%] h-[40px] bg-black text-white cursor-pointer flex items-center justify-center rounded-[5px]'>Sign Up</button>
          </div>

          <div className='w-full flex justify-center'>
            <div className='w-[80%] flex items-center gap-2'>
              <div className='flex-1 h-[0.5px] bg-[#c4c4c4]'></div>
              <div className='text-[#999797] text-sm'>Or continue with</div>
              <div className='flex-1 h-[0.5px] bg-[#c4c4c4]'></div>
            </div>
          </div>

          <div className='w-full flex justify-center'>
            <button className='w-[80%] h-[40px] border border-[#e7e6e6] cursor-pointer flex items-center justify-center gap-3 rounded-[5px] hover:border-black transition-colors'>
              <img src={google} alt="Google" className='w-5 h-5' />
              <span className='text-[#333]'>Continue with Google</span>
            </button>
          </div>


        </div>

        <div className='w-[50%] h-[100%] rounded-r-2xl bg-[black] md:flex items-center justify-center flex-col hidden'>
          <img src={logo} alt="logo" className='w-30 shadow-2xl' />
          <span className='text-2xl text-white'>Virtual Courses</span>


        </div>

      </form>
    </div>
  )
}

export default SignUp