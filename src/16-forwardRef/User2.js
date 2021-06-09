import React, { forwardRef } from 'react'

function User2(props, ref) {
  return (
    <div>
      <input type='text' ref={ref} />
    </div>
  )
}

export default forwardRef(User2)
