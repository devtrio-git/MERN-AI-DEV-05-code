import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { NavTop } from '../components/navbar/NavTop'

export const Layout = ({children}) => {
  return (
    <div>
        <NavTop />
        <Navbar />
        {children}

        {/* Footer */}
    </div>
  )
}

// HOC
// Higher order function is the function that takes a component as input and return a new enhanced component
