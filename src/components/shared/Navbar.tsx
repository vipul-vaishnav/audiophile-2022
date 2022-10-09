import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavData } from '../../constants/NavData'
import Menu from '../../icons/Menu'
import ShoppingBag from '../../icons/ShoppingBag'
import { ReactComponent as Logo } from './../../assets/shared/desktop/logoWhite.svg'
import { v4 as uuidv4 } from 'uuid'

const Navbar = () => {
  const { pathname } = useLocation()

  return (
    <nav className="container px-4 xl:px-0 py-5 lg:py-7 mx-auto max-w-7xl flex items-center justify-between border-neutral-800 border-b">
      <div className="flex items-center justify-center flex-1 lg:flex-grow-0 xs:gap-4">
        <div className="mt-[6px] lg:hidden">
          <button>
            <Menu />
          </button>
        </div>
        <div className="flex-1 flex justify-center xs:justify-start">
          <Logo />
        </div>
      </div>
      <ul className="hidden lg:flex gap-8">
        {NavData.map((el) => {
          return (
            <li
              key={uuidv4()}
              className={`uppercase font-bold tracking-widest ${pathname === el.link ? 'text-orange-500' : ''}`}
            >
              <Link to={el.link}>{el.title}</Link>
            </li>
          )
        })}
      </ul>
      <div>
        <button>
          <ShoppingBag />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
