import React from 'react'

import Image from 'next/image'
import Audiencia from './img/audiencia.webp'
import ConnectNow from '../../button/connectNow'


const ConnectAudiences = () => {
  return (
    <div className='gradiente rounded-[50px] p-0.5'>
        <div className='flex flex-col items-center h-[530px] rounded-[50px] bg-white overflow-hidden'>
            <div className='text-center my-10 px-5'>
                <p className='nordique-semibold text-xl lowercase'>Connect with audiences and launch your music</p>
                <p className='w-4/5 mx-auto my-3'>We provide publishing services to help producers, writers, and artists become profitable. Our musical universe is waiting for you to launch your career to stardom.</p>
                <ConnectNow info="Join now" />
            </div>
            <Image className='h-full rounded-b-5xl' src={Audiencia} alt='Image audiencie'/>
        </div>
    </div>
  )
}

export default ConnectAudiences