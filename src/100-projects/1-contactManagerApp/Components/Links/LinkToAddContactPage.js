import React from 'react'
import { Link } from 'react-router-dom'

function LinkToAddContactPage() {
  return (
    <div>
      <Link to='/add'>
        <button>Add Contact</button>
      </Link>
    </div>
  )
}

export default LinkToAddContactPage
