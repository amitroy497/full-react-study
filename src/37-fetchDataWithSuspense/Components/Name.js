import React, { useState, useEffect } from 'react'
import Address from './Address'

function Name() {
  const [name, setName] = useState('')

  useEffect(() => {
    const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Amit Roy')
      }, 4000)
    })

    getName.then((resp) => {
      setName(resp)
    })
  }, [])

  if (!name) {
    return <h1>Loading name</h1>
  }
  return (
    <div>
      <h1>Title</h1>
      <h1>{name}</h1>
      <Address />
    </div>
  )
}

export default Name
