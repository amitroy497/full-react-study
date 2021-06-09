import React, { useState } from 'react'
import PassFunctionInProps2 from './PassFunctionInProps2'
function PassFunctionInProps1() {
  const [data, setData] = useState('')
  const [input, setInput] = useState('')
  const getData = (e) => {
    let myData = e.target.value
    setData(myData)
  }
  const updateData = () => {
    setInput(data)
  }
  return (
    <div>
      <h1>Pass Function in Props</h1>
      <input type='text' value={data} onChange={getData} />
      <br />
      <br />
      <PassFunctionInProps2 newData={updateData} />
      <h1>{input}</h1>
    </div>
  )
}

export default PassFunctionInProps1
