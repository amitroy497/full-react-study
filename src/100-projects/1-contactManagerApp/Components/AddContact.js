import React, { useState } from 'react'
import { url } from './Nav.js'
import { Table } from 'react-bootstrap'

function AddContact() {
  const [id, setId] = useState()
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()
  const [msg, setMsg] = useState()

  async function postData() {
    const user = { id, name, email, mobile }
    await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        console.log('Post data resp', resp)
        setMsg('Added Successfully')
      })
    })
  }
  const submitData = (e) => {
    e.preventDefault()
    postData()
  }
  return (
    <div>
      <h1>Add Contact</h1>
      <form onSubmit={submitData} style={{ width: '20%', margin: '0 auto' }}>
        <Table hover>
          <tbody>
            <tr>
              <td>
                <label>ID</label>
              </td>
              <td>
                <input
                  type='text'
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Name</label>
              </td>
              <td>
                <input
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email</label>
              </td>
              <td>
                <input
                  type='text'
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
                  type='text'
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <button>Submit</button>
        <br />
        <br />
        <p>{msg}</p>
      </form>
    </div>
  )
}

export default AddContact
