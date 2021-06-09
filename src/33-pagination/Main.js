import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Posts from './Components/Posts'
import PaginationComp from './Components/PaginationComp'

const Main = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(5)

  const postFetch = async () => {
    setLoading(true)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    setPosts(res.data)
    setLoading(false)
  }

  useEffect(() => {
    postFetch()
  }, [])

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <h1>Pagination in React</h1>
      <Posts posts={currentPosts} loading={loading} />
      <PaginationComp
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  )
}

export default Main
