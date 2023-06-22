import React from 'react'

import ConnectNow from '../../button/connectNow'
import AppStore from './img/appstore.png'
import PlayStore from './img/playstore.png'

import Image from 'next/image'

const ConnectPlaystore = () => {
  return (
    <div className='gradiente rounded-5xl p-[1px]'>
        <div className='flex flex-col items-center h-[500px] overflow-hidden rounded-5xl bg-white'>
            <div className='text-center my-10'>
                <p className='nordique-semibold text-xl lowercase'>Discover the world of soundscapes with our app</p>
                <p className='w-4/5 mx-auto my-3'>Create powerful soundtracks, keep track of your assets and much more from our Workables’s app. Available on App Store and Google Play.</p>
                <ConnectNow info="Download now" />
            </div>
            <div className='flex flex-col gap-5'>
                <Image width={300} src={AppStore} alt='Button appstore'/>
                <Image width={300} src={PlayStore} alt='Button playstore'/>
            </div>
        </div>
    </div>
  )
}

export default ConnectPlaystore