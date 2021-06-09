import React, { Suspense } from 'react'
import { fetchData } from './Api'

const resource = fetchData()
function Name() {
  const name = resource.name.read()
  return <h2>{name}</h2>
}

function Address() {
  const address = resource.address.read()
  return <h2>{address}</h2>
}

function Main() {
  return (
    <div>
      <h1>Fetch Data with Suspense</h1>
      <Suspense fallback={<h2>loading...</h2>}>
        <Name></Name>
        <Address></Address>
      </Suspense>
    </div>
  )
}

export default Main
