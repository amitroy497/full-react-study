import React, { useState } from 'react'
import { Table } from 'react-bootstrap'

function UpdateContact(props) {
  const [id, setId] = useState(props.data.id)
  const [name, setName] = useState(props.data.name)
  const [email, setEmail] = useState(props.data.email)
  const [mobile, setMobile] = useState(props.data.mobile)
  const [msg, setMsg] = useState()

  async function modifyData() {
    const user = { id, name, email, mobile }
    console.log('Update user', user)
    await fetch(`http://localhost:3004/contacts/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        console.log('Put response', resp)
      })
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    modifyData()
    setMsg('Update Successfully')
  }

  return (
    <div>
      <h1>Update Contact</h1>
      <form onSubmit={submitForm} style={{ width: '20%', margin: '0 auto' }}>
        <Table hover>
          <tbody>
            <tr>
              <td>
                <label>ID</label>
              </td>
              <td>
                <input value={id} onChange={(e) => setId(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input value={name} onChange={(e) => setName(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Mobile</label>
              </td>
              <td>
                <input
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <button>Update Data</button>
        <br />
        <br />
        <p style={{ color: 'red', fontWeight: 'bold' }}>{msg}</p>
      </form>
    </div>
  )
}

export default UpdateContact
