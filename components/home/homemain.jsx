import React from 'react';
import imageMain from './img/imagemain.webp';
import GetStarted from '../button/getstarted';

import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className='flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-0 mb-52'>
        <div className='w-fit flex flex-col items-center md:items-start gap-5'>
            <h3 className='w-4/5 md:w-[450px] text-center md:text-start text-4xl md:text-5xl nordique-semibold'>The all-in-one content creation platform for Media Agencies</h3>
            <p className='text-center md:text-start w-80'>Streamline production, reduce costs, and create high-quality content with Workables.</p>
            <div className='mx-auto md:mx-0'>
              <GetStarted info="Get started" />
            </div>
        </div>
        <Image width={300} className='lg:hidden' src={imageMain} alt="Imagen main workables" priority={true} />
        <Image width={500} className='hidden lg:block' src={imageMain} alt="Imagen main workables" priority={true} />
    </div>
  )
}

export default HomeMain