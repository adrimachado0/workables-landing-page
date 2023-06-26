import React from 'react';
import imageMain from './img/imagemain.webp';
import GetStarted from '../button/getstarted';

import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 mb-52'>
        <div className='flex flex-col items-center md:items-start gap-5'>
            <h3 className='w-4/5 text-center md:text-start text-4xl nordique-semibold'>The all-in-one content creation platform for Media Agencies</h3>
            <p className='text-center md:text-start w-80'>Streamline production, reduce costs, and create high-quality content with Workables.</p>
            <div className='mx-auto md:mx-0'>
              <GetStarted info="Get started" />
            </div>
        </div>
        <Image className='w-[400px] lg:w-[600px]' src={imageMain} alt="Imagen main workables" priority={true} />
    </div>
  )
}

export default HomeMain