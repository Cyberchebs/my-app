'use client'
import Carousel from './ui/carousel/Carousel';

const Herobanner = () => {
  return (
    <section className='flex flex-row justify-between items-center w-full h-screen gap-8 px-8 overflow-hidden relative'>
      <div className='text-left h-auto w-1/2 flex flex-col justify-center  max-md:pt-60 max-md:pl-10 gap-5 z-10'>
        <h1 className='text-4xl max-md:text-2xl im-fell-english-regular  max-md:text-white'><span className='unifrakturmaguntia-regular text-6xl'>Freeedom</span> sit amet consectetur adipisicing elit. Placeat r</h1>
        <p className='text-lg max-md:text-sm max-md:leading-tight max-md:'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, distinctio est! Omnis nostrum nesciunt officia quos ad illum reiciendis tempore, magni ipsum d</p>
      </div>
      <div 
        className='absolute -right-2 top-1/3 -translate-y-1/2'
        style={{
          transform: 'translateY(20%) rotate(-30deg)',
          transformOrigin: 'center center'
        }}
      >
         <Carousel
           baseWidth={400}
           autoplay={true}
           autoplayDelay={3000}
           pauseOnHover={true}
           loop={true}
           round={false}
         />
      </div>
    </section>
  )
}

export default Herobanner