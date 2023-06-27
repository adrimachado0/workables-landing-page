import React from 'react'

import HomeHelpImage from './img/helpyourightImage.png'
import Image from 'next/image'

const HomeHelpYouRight = () => {
  return (
    <div className='hidden lg:flex lg:justify-end'>
        <Image className='hidden lg:block' width={450} src={ HomeHelpImage } alt="Help you image" />
    </div>
  )
}

export default HomeHelpYouRight