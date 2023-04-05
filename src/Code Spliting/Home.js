import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h2>This is Home component</h2>
        <Link to='/about'>About</Link>
    </div>
  )
}

export default Home
