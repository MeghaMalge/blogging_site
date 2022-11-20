import React from 'react'

export default function Img({src,alt,className,width,height}) {
  return (
    <img src={src} alt={alt} width={width} height={height} className={className}/>
  )
}
