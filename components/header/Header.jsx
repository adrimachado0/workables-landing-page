'use client';

import React, { useEffect, useState } from 'react'
import Logo from '../../assets/workablesLogo.webp'
import LogoImagen from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import { useSelector } from 'react-redux';

import Hamburger from './img/hamburger.png';
import CloseAside from './img/CloseAside.png';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Header = ({setFixed}) => {

  const [openMenu, setOpenMenu] = useState(false)

  const pathname = usePathname()

  const bodyFixed = useSelector(state => state.fixed).value

  useEffect(() => {
    setOpenMenu(false)
  }, [pathname])

  useEffect(() => {
    if(openMenu) return setFixed(true)
    return setFixed(false)
  }, [openMenu])

  useEffect(() => {
    
    if(bodyFixed) return setFixed(true)
    else return setFixed(false)

  }, [bodyFixed])
  

  return (
    <header className='absolute w-full flex gap-2 md:gap-5 justify-between items-center my-5 top-0'>
      <div className='flex justify-center md:justify-around w-full md:mx-20 items-center'>
        <Image width={30} height={30} onClick={() => setOpenMenu(true)} className='z-10 md:hidden cursor-pointer pt-2 mr-5' src={Hamburger} alt="Hamburger menu"/>
        <Link className='z-10 md:hidden' href='/' ><Image className='w-44' src={Logo} alt="Logo Workables" /></Link>
        <Link className='z-10 hidden md:block' href='/'><Image className='w-52' src={LogoImagen} alt="Logo Workables" /></Link>
        <div className='gap-2 md:gap-5 items-center hidden md:flex'>
            <Link href="/waitlist" className='cursor-pointer z-50'>Sign in</Link>
            <Link href="/waitlist" className='cursor-pointer z-50'><GetStarted info="Join the waitlist" className='z-50 cursor-pointer' /></Link>
        </div>
      </div>
        <div className={`z-50 absolute right-0 -top-5 ${openMenu ? 'w-full' : 'w-0'} transition-all duration-300 bg-white overflow-hidden`}>
              <div className={`md:hidden h-screen z-50 flex flex-col items-center`}>
                  <Link className='z-10' href='/'><Image className='w-52 mt-2' src={Logo} alt="Logo Workables" /></Link>
                  <ul className={`flex flex-col gap-5 items-center my-auto`}>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><Link href="/waitlist" className='cursor-pointer'>Sign in</Link></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><GetStarted info="Get started"/></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><Image onClick={() => setOpenMenu(false)}className='cursor-pointer' width={10} src={CloseAside} alt="Close button" /></li>
                  </ul>
              </div>
        </div>
    </header>
  )
}

export default Header