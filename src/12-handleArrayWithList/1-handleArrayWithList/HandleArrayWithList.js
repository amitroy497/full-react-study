import React from 'react'

function HandleArrayWithList() {
  const student = ['Amit', 'Roy', 'Jay']
  const people = [
    { id: '1', name: 'Amit', email: 'amit@test.com', contact: '0000' },
    { id: '2', name: 'Jay', email: 'jay@test.com', contact: '2223' },
  ]
  return (
    <div>
      <h1>Handle Array with List using Map function</h1>
      {student.map((item, i) => (
        <h1 key={i}>My name is : {item}</h1>
      ))}
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {people.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default HandleArrayWithList
