import React, { useState } from 'react'
import PropsInFunctionalComponent2 from './PropsInFunctionalComponent2'

function PropsInFunctionalComponent1() {
  const [data, setData] = useState('')
  const updateData = () => {
    setData("What's my name")
  }
  return (
    <div>
      <h1>Props in Functional Component Example</h1>
      <PropsInFunctionalComponent2 data={data} />
      <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default PropsInFunctionalComponent1
