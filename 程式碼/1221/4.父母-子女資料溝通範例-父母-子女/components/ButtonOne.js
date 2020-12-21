import React, { useState } from 'react'

function ButtonOne(props) {
  const [oneData, setOneData] = useState('One')

  return (
    <>
      <h1>ButtonOne: {props.textData}</h1>
      <button>One</button>
    </>
  )
}

export default ButtonOne
