import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import Navbar from '../components/shared/Navbar'

const Layout = () => {
  return (
    <React.Fragment>
      <div className="font-default bg-neutral-900 min-h-screen text-white w-full overflow-x-hidden text-base font-normal">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
