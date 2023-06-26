import React from 'react'

import ConnectNow from '../../button/connectNow'

import Audiencia from './img/audiencia.webp'

import Image from 'next/image'

const ConnectAudiences = () => {
  return (
    <div className='gradiente rounded-5xl p-0.5'>
        <div className='flex flex-col items-center h-[500px] overflow-hidden rounded-5xl bg-white'>
            <div className='text-center my-10 px-5'>
                <p className='nordique-semibold text-xl lowercase'>Connect with audiences and launch your music</p>
                <p className='w-4/5 mx-auto my-3'>We provide publishing services to help producers, writers, and artists become profitable. Our musical universe is waiting for you to launch your career to stardom.</p>
                <ConnectNow info="Join now" />
            </div>
            <div className='w-full'>
              <Image src={Audiencia} alt="Imagen de la audiencia" />
            </div>
        </div>
    </div>
  )
}

export default ConnectAudiences