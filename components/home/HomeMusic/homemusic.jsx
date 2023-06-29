import React from 'react'

import GetStarted from '../../button/getstarted'
import HomeMusicCard from './homemusiccard'

const HomeMusic = () => {

  return (
    <div className='grid grid-cols-[355px] sm:grid-cols-[400px] md:grid-cols-[500px] lg:grid-cols-[500px_480px] items-center justify-around gap-10 lg:gap-0'>
        <div className='flex flex-col items-center lg:items-start gap-2'>
            <h3 className='text-center lg:text-start nordique-bold lowercase px-0.5 music-title-gradient text-6xl md:h-32'>These are some songs we made</h3>
            <p className='text-center w-64 lg:w-fit'>Here is some of the work weve done with huge brands and artists.</p>
            <div>
              <GetStarted info='sing up' />  
            </div>
        </div>
        <HomeMusicCard />
    </div>
  )
}

export default HomeMusic