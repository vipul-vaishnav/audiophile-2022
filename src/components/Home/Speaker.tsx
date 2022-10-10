import React from 'react'
import ImageDesktop from './../../assets/home/desktop/image-speaker-zx9.png'
import ImageTablet from './../../assets/home/tablet/image-speaker-zx9.png'
import ImageMobile from './../../assets/home/mobile/image-speaker-zx9.png'

const Speaker = () => {
  return (
    <div className="flex flex-col-reverse items-center gap-20 py-20 bg-orange-500 rounded-lg p- lg:px-36 md:px-20 md:py-20 md:flex-row-reverse md:rounded-lg">
      <div className="text-center md:text-left md:flex-1">
        <h2 className="text-4xl font-extrabold text-white md:text-5xl lg:text-6xl">
          ZX9
          <br />
          SPEAKER
        </h2>
        <p className="text-gray-100 xs:max-w-sm my-7 md:text-lg">
          Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
        </p>
        <button className="px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 bg-neutral-900 hover:brightness-125">
          See Product
        </button>
      </div>
      <div className="w-40 h-auto md:max-w-sm md:w-full">
        <picture>
          <source media="(min-width:768px)" srcSet={ImageDesktop} />
          <source media="(min-width:476px)" srcSet={ImageTablet} />
          <img src={ImageMobile} alt="Headphones" />
        </picture>
      </div>
    </div>
  )
}

export default Speaker
