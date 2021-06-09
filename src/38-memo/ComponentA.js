import React from 'react'
const ComponentA = (props) => {
  console.log(props.count)
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  )
}

export default React.memo(ComponentA)
