import React, { useState } from 'react'

function GetInputValue() {
  const [data, setData] = useState('')
  const [myValue, setMyValue] = useState('')
  const getData = (val) => {
    setData(val.target.value)
    setMyValue(false)
  }
  return (
    <div>
      <h1>Get Input Value</h1>
      <input type='text' onChange={getData} value={data} />
      <h1>{data}</h1>
      <button onClick={() => setMyValue(true)}>Print Value</button>
      {myValue ? <h1>{data}</h1> : null}
    </div>
  )
}

export default GetInputValue
