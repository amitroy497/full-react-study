import React, { useState, useEffect } from 'react'

function List({ netItems }) {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(netItems())
    console.log('Update Items')
  }, [netItems])
  return (
    <div>
      <h1>List of Numbers</h1>
      {data.map((items, i) => (
        <h1 key={i}>{items}</h1>
      ))}
    </div>
  )
}

export default List
