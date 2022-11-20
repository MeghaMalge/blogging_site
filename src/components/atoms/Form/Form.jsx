import React from 'react'

export default function Form({children,onSubmitHandler,className}) {
  return (
    <form className={className} onSubmit={(e)=>{e.preventDefault();onSubmitHandler()}}>{children}</form>
  )
}
