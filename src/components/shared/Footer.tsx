import React from 'react'
import { NavData } from '../../constants/NavData'
import { ReactComponent as Logo } from './../../assets/shared/desktop/logoWhite.svg'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import { SocialMedia } from '../../constants/SocialMedia'

const Footer = () => {
  return (
    <footer className="container px-5 xl:px-0 py-16 xs:pb-20 md:py-20 mx-auto max-w-7xl">
      <section className="mb-12 flex flex-col items-center gap-12 xs:items-start md:flex-row md:justify-between">
        <Logo />
        <ul className="flex flex-col items-center gap-5 md:gap-8 xs:flex-row">
          {NavData.map((el) => {
            return (
              <li
                key={uuidv4()}
                className="uppercase font-bold tracking-widest text-white hover:text-orange-500 transition-all duration-300 text-sm"
              >
                <Link to={el.link}>{el.title}</Link>
              </li>
            )
          })}
        </ul>
      </section>
      <section>
        <div className="max-w-xl">
          <p className="text-center text-neutral-400 xs:text-left mb-12">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound
            specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo
            facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="flex flex-col xs:flex-row gap-10 items-center xs:justify-between">
          <div>
            <p className="text-center text-neutral-400">Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-8 md:gap-10">
              {SocialMedia.map((item) => {
                return (
                  <li key={uuidv4()} className="cursor-pointer">
                    <a
                      href={'https://www.' + item.title.toLowerCase() + '.com/'}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="block hover:scale-125 transition-all duration-300"
                    >
                      <img src={item.logo} alt={item.title + 'logo'} />
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
