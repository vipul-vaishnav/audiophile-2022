import React from 'react'
import Hero from '../components/Home/Hero'
import Menu from '../components/Home/Menu'
import Speaker from '../components/Home/Speaker'

const Home = () => {
  return (
    <div>
      <div className="container px-5 mx-auto xl:px-0 max-w-7xl">
        <Hero />
      </div>
      <div className="pb-24 bg-white">
        <div className="container px-5 mx-auto xl:px-0 max-w-7xl text-neutral-900">
          <Menu />
          <Speaker />
        </div>
      </div>
    </div>
  )
}

export default Home
