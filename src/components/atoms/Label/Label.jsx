import React from 'react'

export default function Label({children,HTMLfor}) {
  return (
    <label htmlFor={HTMLfor}>{children}</label>
  )
}
