import React, { useState, useEffect } from 'react'
import { url } from './Nav.js'
import { Table } from 'react-bootstrap'
import { deleteContact } from './DeleteContact'
import { Link } from 'react-router-dom'

function Home(props) {
  const [data, setData] = useState([])

  async function getData() {
    await fetch(url).then((result) => {
      result.json().then((resp) => {
        setData(resp)
        console.log('Get Data Resp', resp)
      })
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <h1>Contact Manager</h1>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Mobile</td>
            <td>Update</td>
            <td>Delete</td>
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
                <button
                  onClick={() => {
                    props.selectData(item)
                  }}
                >
                  <Link to='/update'>Update</Link>
                </button>
              </td>
              <td>
                <button onClick={() => deleteContact(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Home
