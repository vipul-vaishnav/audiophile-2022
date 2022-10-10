import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="container px-5 py-5 mx-auto xl:px-0 lg:py-7 max-w-7xl">
      <h1 className="my-12 text-center text-7xl">404</h1>
      <p className="font-bold text-center text-neutral-500">Oops! Page Not Found</p>
      <Link
        to="/"
        className="block px-12 py-3 mx-auto mt-10 font-bold tracking-widest text-white uppercase bg-orange-500 w-max"
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Error
