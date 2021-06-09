import React, { useState } from 'react'

function BasicForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const submitData = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  const clearData = () => {
    setName('')
    setEmail('')
  }
  return (
    <div>
      <form onSubmit={submitData}>
        <label>Name: </label>
        <input
          type='text'
          placeholder='Please enter the name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email: </label>
        <input
          type='text'
          placeholder='Please enter the email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button>Submit</button>
        <button onClick={clearData}>Clear</button>
      </form>
    </div>
  )
}

export default BasicForm
