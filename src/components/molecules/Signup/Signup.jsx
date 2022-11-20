import React, { useState } from "react";
import StyledButton from "../../atoms/Button/StyledButton";
import Form from "../../atoms/Form/Form";
import Input from "../../atoms/Input/Input";
import Label from "../../atoms/Label/Label";
import Button from '../../atoms/Button/Button'

export default function Signup() {
  let [signupForm, setSignupForm] = useState({});

  
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSignupForm({
      ...signupForm,
      [name]: value,
    });
    console.log(signupForm);

  };


  const postUser = async (signupForm) => {
    try{
      let response = await fetch(`http://localhost:3000/users`, 
      {
        method: "POST",
        headers: { "Content-type": "Application/json" },
        body: JSON.stringify(signupForm),
      });
      let message=await response.json();
      return message
  }
    catch(error){
      return error
    }
  };


  const onSubmitHandler = () => {
    postUser(signupForm)
      .then(data=>{console.log(data)})
  };

  return (
    <Form className="flex flex-col" onSubmitHandler={onSubmitHandler}>
      <Label HTMLfor="name">name</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="name"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="text"
      />
      <Label>username</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="username"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="text"
      />
      <Label>email</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="email"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="email"
      />
      <Label>password</Label>
      <Input
      className="border border-white border-b-black focus:outline-none focus:bg-slate-200 my-3"
        name="password"
        onChangeHandler={(e) => {
          onChangeHandler(e);
        }}
        type="password"
      />

        <Button disabled={false} className="bg-black text-white my-3">
          Signup
        </Button>

    </Form>
  );
}
