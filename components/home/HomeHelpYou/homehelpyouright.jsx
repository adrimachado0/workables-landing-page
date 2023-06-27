import React from 'react'

import HomeHelpImage from './img/helpyourightImage.png'
import Image from 'next/image'

const HomeHelpYouRight = () => {
  return (
    <div className='flex justify-end'>
        <Image width={450} src={ HomeHelpImage } alt="Help you image" />
    </div>
  )
}

export default HomeHelpYouRight