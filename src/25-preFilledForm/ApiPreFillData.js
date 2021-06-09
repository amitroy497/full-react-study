import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'

const url = 'http://localhost:3004/users'

function ApiPreFillData() {
  const [data, setData] = useState([])
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const myFunc = () => {
    let enterId = Math.floor(Math.random() * 10)
    console.log(enterId)
    const user = { enterId, name, email, mobile }
    return user
  }
  const getData = () => {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setData(resp)
        setId(resp[0].id)
        setName(resp[0].name)
        setEmail(resp[0].email)
        setMobile(resp[0].mobile)
      })
    })
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
  const selectData = (i) => {
    let selected = data[i - 1]
    setId(selected.id)
    setName(selected.name)
    setEmail(selected.email)
    setMobile(selected.mobile)
  }
  const modifyData = () => {
    const user = { id, name, email, mobile }
    fetch(`http://localhost:3004/users/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user),
    }).then((result) => {
      result.json().then((resp) => {
        console.log('Put Data Response', resp)
        getData()
      })
    })
  }
  const deleteData = (id) => {
    fetch(`http://localhost:3004/users/${id}`, {
      method: 'DELETE',
    }).then((result) => {
      result.json().then((resp) => {
        console.log('delete response', resp)
        getData()
      })
    })
  }
  const submitData = (e) => {
    e.preventDefault()
    let x = myFunc()
    postData(x)
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <div>
        <h1>Pre Fill Api Data</h1>
        <br />
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <div style={{ border: '1px solid #dedede', padding: '10px' }}>
            <form onSubmit={submitData}>
              <h1>Input Form</h1>
              <br />
              <label>ID : </label> <input value={id} disabled />
              <br />
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
            <button onClick={modifyData}>Modify</button>
          </div>
          <Table style={{ width: '50%' }}>
            <thead>
              <tr>
                <td>ID</td>
                <td>Namea</td>
                <td>Email</td>
                <td>Mobile</td>
                <td>Update User</td>
                <td>Delete User</td>
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
                    <button onClick={() => selectData(item.id)}>Update</button>
                  </td>
                  <td>
                    <button onClick={() => deleteData(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default ApiPreFillData
