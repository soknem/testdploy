import React from 'react'
type PropsType={
    readonly id:number,
    title:string;
}
export default function CardTest({id,title}:PropsType) {
  return (
    <div>
        <h1>{id}</h1>
        <p>{title}</p>
    </div>
  )
}
