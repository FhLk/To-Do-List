"use client"
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import AuthContext from '../AuthContext';

interface LoginData {
  username : string | undefined
  password : string | undefined
}

const Login = () => {
  const router = useRouter();
  const { login } = useContext(AuthContext);
  const correctUser : LoginData = {
    username : process.env.USERNAME, 
    password : process.env.PASSWORD
  }
  const [username , setUsernname] = useState<string>("")
  const [password , setPassword] = useState<string>("")

  const validateUser = (username : string , password : string) =>{
    if(username === "" && password === ""){
      console.log("Both is Empty");
      return
    }
    else if(username === "" || password === ""){
      if(username === ""){
        console.log("Username is Empty");
        return 
      }
      else if(password === ""){
        console.log("Password is Empty");
        return
      }
    }
    else{
      if(username !== correctUser.username || password !== correctUser.password){
        console.log("User Incorrect");
        return 
      }
      goToList();
    }
  }

  const goToList = () =>{
    sessionStorage.setItem("username",username)
    sessionStorage.setItem("password",password)
    login()
    router.push("/todo")
  }
  return (
    <div className='flex flex-col gap-10 text-center justify-center items-center px-5 py-7
    w-[500px] border-solid border-2 border-black rounded-xl'>
        <h1 className='text-3xl font-bold'>Login</h1>
        <form className='flex flex-col gap-6 w-full'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold'>Username</h3>
            <input type='text' className='border-solid border-2 border-black rounded-xl px-4 py-1' 
            placeholder='Email...' value={username} onChange={ e => setUsernname(e.target.value) }/>
          </div>
          <div className='flex flex-col gap-2'>
            <h3 className='text-xl font-bold'>Password</h3>
            <input type='password' className='border-solid border-2 border-black rounded-xl px-4 py-1' 
            placeholder='Password...' value={password} onChange={ e => setPassword(e.target.value)} />
          </div>
        </form>
        <button onClick={() => validateUser(username,password)} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow w-full'>Login</button>
    </div>
  )
}

export default Login
