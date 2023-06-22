import React from 'react'

import Image from 'next/image'
import Star from './img/star.png'

const HomeFaqsComponents = ({open, handleButtonClick, step}) => {
  return (
    <div className='rounded-3xl gradiente p-0.5 cursor-pointer transition-all'>
      <div className='rounded-3xl h-full w-full items-center bg-white px-3 py-5 transition-all' onClick={() => handleButtonClick(step)}>
        
        <div className='flex justify-between w-full items-center overflow-hidden'>
            <div className={`h-10 ${open ? 'h-24' : ''} transition-all`}>
                <p className='step-gradient leading-none'>Step {step}</p>
                <p className='font-semibold text-xl'>Tell us what kind of service you need.</p>
                <p className={`mt-2`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint tenetur vero ad itaque dolor consectetur harum enim provident esse pariatur aliquam architecto ea dignissimos veniam exercitationem dolores aut, ipsam vel!</p>
            </div>
            <Image className='w-9 h-9' src={Star} alt='Star logo faqs' />
        </div>

      </div>
    </div>
  )
}

export default HomeFaqsComponents