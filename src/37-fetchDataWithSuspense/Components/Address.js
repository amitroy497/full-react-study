import React, { useState, useEffect } from 'react'

function Address() {
  const [address, setAddress] = useState('')

  useEffect(() => {
    const getAddress = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Ranchi, Jharkhand')
      }, 4000)
    })

    getAddress.then((resp) => {
      setAddress(resp)
    })
  }, [])

  if (!address) {
    return <h1>Loading address</h1>
  }
  return (
    <div>
      <h1>Address</h1>
      <h1>{address}</h1>
    </div>
  )
}

export default Address
