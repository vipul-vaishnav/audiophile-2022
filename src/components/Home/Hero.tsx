import React from 'react'
import ImageDesktop from './../../assets/home/desktop/image-hero.jpg'
import ImageTablet from './../../assets/home/tablet/image-header.jpg'
import ImageMobile from './../../assets/home/mobile/image-header.jpg'

const Hero = () => {
  return (
    <section className="relative">
      <div>
        <picture>
          <source media="(min-width:768px)" srcSet={ImageDesktop} />
          <source media="(min-width:476px)" srcSet={ImageTablet} />
          <img src={ImageMobile} alt="Headphones" />
        </picture>
      </div>
      <div className="absolute w-full text-center -translate-x-1/2 -translate-y-1/2 xs:max-w-md top-1/2 left-1/2 md:text-left md:left-0 md:translate-x-0">
        <h2 className="mb-5 sm:mb-8 sm:text-lg font-extrabold tracking-[8px] uppercase text-neutral-500">
          NEW PRODUCT
        </h2>
        <h1 className="mb-5 text-4xl font-bold xs:text-5xl sm:mb-8">XX99 MARK II HEADPHONES</h1>
        <p className="mb-5 text-base xs:mb-8 xs:text-lg lg:text-xl text-neutral-500">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <button className="px-8 py-3 text-sm font-semibold tracking-widest text-white uppercase transition-all duration-300 bg-orange-500 hover:brightness-125">
          See Product
        </button>
      </div>
    </section>
  )
}

export default Hero
