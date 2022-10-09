import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NavData } from '../../constants/NavData'
import Menu from '../../icons/Menu'
import ShoppingBag from '../../icons/ShoppingBag'
import { ReactComponent as Logo } from './../../assets/shared/desktop/logoWhite.svg'
import { v4 as uuidv4 } from 'uuid'

type NavbarProps = {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar = ({ setShow }: NavbarProps) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  return (
    <nav className="container flex items-center justify-between px-5 py-5 mx-auto border-b xl:px-0 lg:py-7 max-w-7xl border-neutral-700">
      <div className="flex items-center justify-center flex-1 lg:flex-grow-0 xs:gap-4">
        <div className="mt-[6px] lg:hidden">
          <button onClick={() => setShow(true)}>
            <Menu />
          </button>
        </div>
        <div className="flex justify-center flex-1 xs:justify-start">
          <Logo onClick={() => navigate('/')} />
        </div>
      </div>
      <ul className="hidden gap-8 lg:flex">
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
