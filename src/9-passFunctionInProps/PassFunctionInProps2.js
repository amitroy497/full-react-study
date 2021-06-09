import React from 'react'

function PassFunctionInProps2(props) {
  return (
    <div>
      <button onClick={props.newData}>Get Data</button>
    </div>
  )
}

export default PassFunctionInProps2
