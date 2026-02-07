import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
      <h1>404 not Found</h1>
      <Link to={"/home"}>Go To HomePage</Link>
    </div>
  )
}

export default NotFound
