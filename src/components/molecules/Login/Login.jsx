import React, { useContext, useState } from 'react'
import StyledButton from '../../atoms/Button/StyledButton'
import Form from '../../atoms/Form/Form'
import Input from '../../atoms/Input/Input'
import Label from '../../atoms/Label/Label'
import HomePage from '../../pages/HomePage/HomePage'
import {useNavigate, Navigate} from 'react-router-dom';
import AuthContext from '../../../context/AuthContext'
import Button from '../../atoms/Button/Button'

export default function Login() {
  let navigate = useNavigate()
  let [loginForm,setLoginForm]=useState({})
  let contextData= useContext(AuthContext)

   const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLoginForm({
      ...loginForm,
      [name]: value,
    });
    console.log(loginForm);

  };
  const checkLogin = async (loginForm) => {
    try{
      let response = await fetch(`http://localhost:3000/users/?email=${loginForm.email}&password=${loginForm.password}`)
      let data=await response.json();
      return data;
  }
    catch(error){
      return error
    }
  };
  const onSubmitHandler = (e) => {

    checkLogin(loginForm)
      .then(data=>{
        console.log(data)
        if(data.length){
          alert("Loggedin Succefullly!")
            contextData.setLoggedIn(true)
            sessionStorage.setItem("login",true)
            sessionStorage.setItem("user-id",data[0].id)
          navigate("/allBlogs")   
 

        }
        else{
          alert("incorrect email or password!")
        }
      })
      
  };

  return (
    <Form className="flex flex-col" onSubmitHandler={onSubmitHandler} >
        <Label>email</Label>
        <Input className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3 " onChangeHandler={(e)=>{
          onChangeHandler(e)
        }} name="email" type="email"/>
        <Label>password</Label>
        <Input className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3" onChangeHandler={(e)=>{
          onChangeHandler(e)
        }} name="password" type="password"/>

        <Button type='submit' className="my-3">Login</Button>

      
    </Form>
  )
}
