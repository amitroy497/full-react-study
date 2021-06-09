import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Table } from 'react-bootstrap'

const url = 'http://localhost:3004/users'
function Apifetchdata() {
  const [data, setData] = useState([])
  const getData = () => {
    fetch(url).then((result) => {
      result.json().then((resp) => {
        setData(resp)
      })
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div>
      <h1>Get Data from Api</h1>
      <Table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Contact</td>
          </tr>
        </thead>
        <tbody>
          {data.map((item, ID) => (
            <tr key={ID}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Apifetchdata
