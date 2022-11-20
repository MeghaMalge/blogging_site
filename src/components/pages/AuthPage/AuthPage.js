import React from 'react'
import { Link, Outlet, Route,Routes } from 'react-router-dom'
import Button from '../../atoms/Button'
import Login from '../../molecules/Login/Login'
import Signup from '../../molecules/Signup/Signup'
import LoginHolder from '../../organisms/LoginHolder/LoginHolder'

export default function AuthPage() {  
  return (
    <div className='flex flex-col items-center'>
      <Link to="/">
        <Button bg="inherit" text="black" className='mt-10'>Home</Button>
      </Link> 
        <div>
        <Link to="login">
            <Button className='m-5'>Login</Button>
        </Link>
        <Link to="signup">
            <Button className='m-5'>Signup</Button>
        </Link>
        </div>
       
        <Outlet/>
    </div>
  )
}
