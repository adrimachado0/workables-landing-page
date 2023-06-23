import React from 'react'
import Logo from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='absolute w-full flex gap-2 md:gap-5 justify-between items-center my-5'>
      <div className='flex justify-between w-full mx-20'>
        <Link href='https://bubble.io/domain_not_supported?domain=app.workables.io'><Image className=' w-52' src={Logo} alt="Logo Workables" /></Link>
        <div className='flex gap-2 md:gap-5 items-center'>
            <p className='cursor-pointer'>Sign in</p>
            <GetStarted info="Get started"/>
        </div>
      </div>
    </header>
  )
}

export default Header