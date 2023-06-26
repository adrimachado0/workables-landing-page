import React from 'react'
import Image from 'next/image'
const HomeImages = ({faqsImage}) => {
  return (
    <div>
        <Image className='w-5/6 lg:h-[460px] lg:w-[450px] mx-auto' src={faqsImage} alt='Faqs image ' />
    </div>
  )
}

export default HomeImages