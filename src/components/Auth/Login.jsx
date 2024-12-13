import React, { useState } from 'react'

const Login = ({handleLogIn}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()
    handleLogIn(email,password)
    setEmail("")
    setPassword("")
  }


  return (
    <div className='flex items-center justify-center h-screen w-screen '>
      <div className='p-10 border-2 rounded-xl border-orange-500 '>
      <h1 className='text-white font-bold mb-6'>Log In</h1>
        <form 
        onSubmit={(e)=>{handleSubmit(e)}} 
        className='flex flex-col items-center justify-center'>
          <input 
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email}
           className='px-3 py-4 border-2 border-pink-600 rounded-xl outline-none text-white  placeholder:text-gray-400 bg-transparent' type="email" 
           placeholder='Enter email'
           />
          <input 
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          className='mt-3 px-3 py-4 border-2 border-pink-600 rounded-xl outline-none text-white placeholder:text-gray-400 bg-transparent' 
          type="password" 
          placeholder='Enter password'
           />
          <button className='mt-3 border-2 py-3 px-20 bg-orange-500 text-white border-none rounded-xl outline-none'>log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login