import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <>
   <h1>Home</h1>
   <Link to={'/'}>Home</Link>
   <Link to={'services'}>Services</Link>
   
   
   </>
  )
}

export default Home