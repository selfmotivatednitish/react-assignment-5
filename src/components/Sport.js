import React from 'react'

export default function Sport({sportName}) {
    if(sportName === 'HelloWorld') {
        throw new Error("Not a sports!")
    }
  return (
    <div>
        {sportName}
    </div>
  )
}
