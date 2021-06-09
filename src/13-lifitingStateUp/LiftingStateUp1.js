import React, { useState } from 'react'
import LiftingStateUp2 from './LiftingStateUp2'

function LiftingStateUp1() {
  const [data, setData] = useState('')
  const getData = (val) => {
    setData(val + 1)
  }
  return (
    <div>
      <h1>Lifting State Up</h1>
      <LiftingStateUp2 item={getData} myData={data} />
    </div>
  )
}

export default LiftingStateUp1
