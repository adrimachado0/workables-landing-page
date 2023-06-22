import React from 'react';
import imageMain from './img/imagemain.png';
import GetStarted from '../button/getstarted';

import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className='grid grid-cols-[384px_839px] items-center gap-32'>
        <div className='flex flex-col gap-3'>
            <h3 className='text-4xl nordique-semibold'>The all-in-one content creation platform for Media Agencies</h3>
            <p className='w-80'>Streamline production, reduce costs, and create high-quality content with Workables.</p>
            <GetStarted info="Get started" />
        </div>
        <Image className=' w-11/12' src={imageMain} alt="Imagen main workables" />
    </div>
  )
}

export default HomeMain