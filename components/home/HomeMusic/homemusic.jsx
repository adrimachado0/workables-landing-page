import React from 'react'

import GetStarted from '../../button/getstarted'
import HomeMusicCard from './homemusiccard'

const HomeMusic = () => {

  return (
    <div className='grid grid-cols-[500px_480px] items-center justify-around'>
        <div>
            <h3 className='nordique-bold lowercase px-0.5 music-title-gradient text-6xl'>These are some songs we made</h3>
            <p>Here is some of the work weve done with huge brands and artists.</p>
            <GetStarted info='sing up' />  
        </div>
        <HomeMusicCard />
    </div>
  )
}

export default HomeMusic