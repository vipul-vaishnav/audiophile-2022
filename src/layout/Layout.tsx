import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/shared/Footer'
import HamburgerMenu from '../components/shared/HamburgerMenu'
import Navbar from '../components/shared/Navbar'
import ToggleSwitch from '../components/shared/ToggleSwitch'

const Layout = () => {
  const [show, setShow] = React.useState<boolean>(false)

  return (
    <React.Fragment>
      <div className="relative w-full min-h-screen overflow-x-hidden text-base font-normal text-white font-default bg-primary">
        <Navbar setShow={setShow} />
        <HamburgerMenu show={show} setShow={setShow} />
        <Outlet />
        <ToggleSwitch />
        <Footer />
      </div>
    </React.Fragment>
  )
}

export default Layout
