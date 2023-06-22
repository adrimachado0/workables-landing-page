import React from 'react'
import Image from 'next/image'
const HomeImages = ({faqsImage}) => {
  return (
    <div>
        <Image height={484} width={340} className='max-h-faqs-h md:min-w-faqs-w' src={faqsImage} alt='Faqs image ' />
    </div>
  )
}

export default HomeImages