import React from 'react'
import { Table } from 'react-bootstrap'

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading</h2>
  }
  return (
    <div>
      <Table striped bordered hover variant='dark'>
        <thead>
          <tr>
            <td>S.No.</td>
            <td>Title</td>
            <td>Comments</td>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Posts
