import React from 'react'

import ConnectNow from '../../button/connectNow'
import AppStore from './img/appstore.webp'
import PlayStore from './img/playstore.webp'

import Image from 'next/image'

const ConnectPlaystore = () => {
  return (
    <div className='gradiente rounded-[50px] p-0.5'>
        <div className='flex flex-col items-center h-[530px] overflow-hidden rounded-[50px] bg-white'>
            <div className='text-center my-10 px-5'>
                <p className='nordique-semibold text-xl lowercase'>Discover the world of soundscapes with our app</p>
                <p className='lg:w-4/5 mx-auto my-3'>Create powerful soundtracks, keep track of your assets and much more from our Workables’s app. Available on App Store and Google Play.</p>
                <ConnectNow info="Download now" />
            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <Image width={300} src={AppStore} alt='Button appstore'/>
                <Image width={300} src={PlayStore} alt='Button playstore'/>
            </div>
        </div>
    </div>
  )
}

export default ConnectPlaystore