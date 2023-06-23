import React from 'react'
import Logo from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='flex gap-2 mx-2 md:gap-5 justify-between items-center md:mx-20 my-5'>
        <Link href='/'><Image className=' w-52' src={Logo} alt="Logo Workables" /></Link>
        <div className='flex gap-2 md:gap-5 items-center'>
            <p className='cursor-pointer'>Sign in</p>
            <GetStarted info="Get started"/>
        </div>
    </header>
  )
}

export default Header