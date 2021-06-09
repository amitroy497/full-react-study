import React, { useEffect, useRef } from 'react'

function User2(props) {
  const prevValue = useRef()
  useEffect(() => {
    prevValue.current = props.data
  }, [props.data])
  const prevProps = prevValue.current
  return (
    <div>
      <h1>Current : {props.data}</h1>
      <h1>Previous : {prevProps}</h1>
    </div>
  )
}

export default User2
