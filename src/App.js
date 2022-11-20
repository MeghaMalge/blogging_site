import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/molecules/Login/Login'
import Signup from './components/molecules/Signup/Signup'
import LoginHolder from './components/organisms/LoginHolder/LoginHolder'
import HomePage from './components/pages/HomePage/HomePage'
import AuthPage from './components/pages/AuthPage/AuthPage'
import BlogList from './components/organisms/BlogList/BlogList'
import AuthContext from './context/AuthContext'

export default function App() {
  let contextData= useContext(AuthContext)

  if(sessionStorage.getItem("login")){
    contextData.setLoggedIn(true)
  }
  console.log(contextData.loggedIn)
  return (
    <React.Fragment>
      
        <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/' element={<HomePage/>}>
            <Route path='/:id' element={<BlogList/>}/>
        </Route>
        <Route path='auth' element={<AuthPage/>}> 
              <Route index element={<LoginHolder><Login/></LoginHolder>}/>
              <Route path="login" element={<LoginHolder><Login/></LoginHolder>}/>
              <Route path="signup" element={<LoginHolder><Signup/></LoginHolder>}/>
        </Route>
        </Routes>

    </React.Fragment>
  )
}
