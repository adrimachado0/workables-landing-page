'use client';

import React, { useState } from 'react'
import Logo from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import Hamburger from './img/hamburger.png';
import CloseAside from './img/CloseAside.png';

import Link from 'next/link'
import Image from 'next/image'

const Header = () => {

  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className='absolute w-full flex gap-2 md:gap-5 justify-between items-center my-5'>
      <div className='flex justify-between w-full md:mx-20 items-center'>
        <Link className='z-10' href='https://bubble.io/domain_not_supported?domain=app.workables.io'><Image className='w-52' src={Logo} alt="Logo Workables" /></Link>
        <div className='gap-2 md:gap-5 items-center hidden md:flex'>
            <p className='cursor-pointer'>Sign in</p>
            <GetStarted info="Get started"/>
        </div>
        <Image width={30} height={30} onClick={() => setOpenMenu(!openMenu)} className=' z-10 md:hidden cursor-pointer' src={Hamburger} alt="Hamburger menu"/>
      </div>
        <div className={`z-50 absolute right-0 -top-5 ${openMenu ? 'w-full' : 'w-0'} transition-all duration-300 bg-white`}>
              <div className={`md:hidden h-screen z-50 flex flex-col items-center justify-center`}>
                  <ul className={`flex flex-col gap-5 items-center`}>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><p className='cursor-pointer'>Sign in</p></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><GetStarted info="Get started"/></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><Image onClick={() => {setOpenMenu(!openMenu)}}className='cursor-pointer' width={10} src={CloseAside}/></li>
                  </ul>
              </div>
        </div>
    </header>
  )
}

export default Header