import React, { useRef, useLayoutEffect } from 'react'

function User() {
  const inputRef = useRef()

  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect())
  }, [])

  return (
    <div>
      <h1>useLayoutEffect Hook in React</h1>
      <div
        style={{
          backgroundColor: '#dedede',
          fontSize: '16px',
          width: '80%',
          padding: '10px',
          border: '1px solid ',
          fontWeight: 'bold',
          margin: '0 auto',
          borderRadius: '10px',
        }}
      >
        <p>
          The signature is identical to useEffect, but it fires synchronously
          after all DOM mutations.
        </p>
        <p>
          Use this to read layout from the DOM and synchronously re-render.{' '}
        </p>
        <p>
          Updates scheduled inside useLayoutEffect will be flushed
          synchronously, before the browser has a chance to paint.
        </p>
      </div>
      <input type='text' ref={inputRef} />
    </div>
  )
}

export default User
