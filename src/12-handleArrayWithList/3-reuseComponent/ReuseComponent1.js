import React from 'react'
import Reusecomponent2 from './Reusecomponent2'

function ReuseComponent1() {
  const user = [
    {
      name: 'Amit',
      email: 'amit@test.com',
      address: [
        { HNo: '123', city: 'Ranchi' },
        { HNo: '143', city: 'Dhanbad' },
      ],
    },
    {
      name: 'Amit',
      email: 'amit@test.com',
      address: [
        { HNo: '123', city: 'Ranchi' },
        { HNo: '143', city: 'Dhanbad' },
      ],
    },
    {
      name: 'Amit',
      email: 'amit@test.com',
      address: [
        { HNo: '123', city: 'Ranchi' },
        { HNo: '143', city: 'Dhanbad' },
      ],
    },
  ]
  return (
    <div>
      <h1>Reuse Component</h1>
      {user.map((item, i) => (
        <Reusecomponent2 data={item} key={i} />
      ))}
    </div>
  )
}

export default ReuseComponent1
