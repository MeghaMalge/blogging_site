import React from 'react'

export default function Input({type,  onChangeHandler,ariaLable,id,name,required,className,onInput}) {
  return (
    <input onInput={onInput} type={type} id={id} name={name} className={className} required={required} onChange={onChangeHandler} aria-labelledby={ariaLable} />
  )
}
