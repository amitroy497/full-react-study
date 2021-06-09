import React from 'react'

function NestedListWithNestedArray() {
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
      <h1>Nested List With Nested Array</h1>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {user.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <table>
                  <thead>
                    <tr>
                      <td>House No.</td>
                      <td>City</td>
                    </tr>
                  </thead>
                  <tbody>
                    {item.address.map((data, j) => (
                      <tr key={j}>
                        <td>{data.HNo}</td>
                        <td>{data.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NestedListWithNestedArray
