import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'

const url = 'http://localhost:3004/users'

function ApiDeleteData() {
  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const submitData = (e) => {
    e.preventDefault()
    const user = { name, email, mobile }
    postData(user)
  }

  const postData = (x) => {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(x),
    }).then((result) => {
      result.json().then((resp) => {
        getData()
      })
    })
  }
  const getData = () => {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }
  const deleteData = (id) => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.log('resp', resp)
        getData()
      })
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h1>Delete Api Data</h1>
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <form
          onSubmit={submitData}
          style={{ border: '1px solid #dedede', padding: '10px' }}
        >
          <h1>Input Form</h1>
          <br />
          <label>Name :</label>{' '}
          <input
            type='text'
            placeholder='Enter the name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <label>Email : </label>{' '}
          <input
            type='text'
            placeholder='Enter the email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <br />
          <label>Mobile : </label>{' '}
          <input
            type='text'
            placeholder='Enter the mobile number'
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
        <br />
        <br />
        <Table style={{ width: '50%' }}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Namea</td>
              <td>Email</td>
              <td>Mobile</td>
              <td>Delete Item</td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ApiDeleteData
