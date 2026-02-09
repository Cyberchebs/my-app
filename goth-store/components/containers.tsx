import React from 'react';
import Link from 'next/link';

const containers = () => {
  return (
    <div className='h-screen'>
        <div className='h-full w-full flex flex-col items-center justify-center gap-10'>
            <h3 className='text-5xl font-bold im-fell-english-regular'>pick ur <span className="unifrakturmaguntia-regular text-6xl">vice</span></h3>
            <div className='flex w-full flex-row p-7 max-md:flex-col justify-between max-md:gap-4 items-center'>
                <Link href="/nextpage"><div className='w-160 h-80 max-md:w-full max-md:h-40 bg-black'></div></Link>
                <Link href="/nextpage"><div className="w-160 h-80 max-md:w-full max-md:h-40 bg-black"></div></Link>
            </div>
        </div>
    </div>
  )
}

export default containers