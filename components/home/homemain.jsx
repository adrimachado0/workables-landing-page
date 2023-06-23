import React from 'react';
import imageMain from './img/imagemain.webp';
import GetStarted from '../button/getstarted';

import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className='flex items-center gap-32'>
        <div className='flex flex-col gap-3'>
            <h3 className='text-5xl nordique-semibold'>The all-in-one content creation platform for Media Agencies</h3>
            <p className='w-80'>Streamline production, reduce costs, and create high-quality content with Workables.</p>
            <GetStarted info="Get started" />
        </div>
        <Image width={600} src={imageMain} alt="Imagen main workables" priority={true} />
    </div>
  )
}

export default HomeMain