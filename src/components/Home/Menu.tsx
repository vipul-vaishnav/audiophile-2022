import React from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import Earphones from './../../assets/shared/desktop/image-earphones.png'
import Headphones from './../../assets/shared/desktop/image-headphones.png'
import Speakers from './../../assets/shared/desktop/image-speakers.png'
import { ReactComponent as Arrow } from './../../assets/shared/desktop/icon-arrow-right.svg'

const data = [
  {
    title: 'headphones',
    link: '/headphones',
    image: Headphones
  },
  {
    title: 'speakers',
    link: '/speakers',
    image: Speakers
  },
  {
    title: 'earphones',
    link: '/earphones',
    image: Earphones
  }
]

const Menu = () => {
  return (
    <div className="mt-12 py-36">
      <div className="px-6 py-8 bg-white text-neutral-900 rounded-b-2xl">
        <section className="flex flex-col gap-8 sm:gap-5 space-between sm:flex-row">
          {data.map((item) => {
            return (
              <Link
                key={uuidv4()}
                to={item.link}
                className="relative flex-1 px-3 pb-5 bg-gray-100 border-2 border-transparent shadow pt-28 rounded-2xl active:border-dashed active:border-orange-500"
              >
                <div className="absolute -translate-x-1/2 translate-y-1/2 w-max -top-1/2 left-1/2">
                  <img src={item.image} alt={item.title + ' illustration'} className="w-40 h-auto mx-auto" />
                </div>
                <p className="font-bold tracking-widest text-center uppercase">{item.title}</p>
                <div className="flex items-center justify-center gap-5 mt-5">
                  <p className="uppercase text-neutral-500">Shop</p>
                  <Arrow />
                </div>
              </Link>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default Menu
