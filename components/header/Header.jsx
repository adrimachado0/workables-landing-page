'use client';

import React, { useState } from 'react'
import Logo from '../../assets/workablesLogo.png'
import GetStarted from '../button/getstarted'

import Hamburger from './img/hamburger.png';
import CloseAside from './img/CloseAside.png';

import Link from 'next/link'
import Image from 'next/image'

import { useDispatch, useSelector } from 'react-redux';
import { fixedUnfixed } from '@/redux/features/fixedBody/fixedBody';

const Header = ({fixed, setFixed}) => {

  const [openMenu, setOpenMenu] = useState(false)

  // const fixed = useSelector(state => state.fixed)
  // const dispatch = useDispatch()

  const handleFixedBody = fixedBody => {
    // dispatch(fixedUnfixed(fixedBody))
    setFixed(fixedBody)
  }

  return (
    <header className='absolute w-full flex gap-2 md:gap-5 justify-between items-center my-5 top-0'>
      <div className='flex justify-around w-full md:mx-20 items-center'>
        <Link className='z-10' href='/'><Image className='w-52' src={Logo} alt="Logo Workables" /></Link>
        <div className='gap-2 md:gap-5 items-center hidden md:flex'>
            <Link href="/waitlist" className='cursor-pointer z-50'>Sign in</Link>
            <GetStarted info="Get started" className='z-50 cursor-pointer' />
        </div>
        <Image width={30} height={30} onClick={() => {setOpenMenu(!openMenu); handleFixedBody(true)}} className=' z-10 md:hidden cursor-pointer' src={Hamburger} alt="Hamburger menu"/>
      </div>
        <div className={`z-50 absolute right-0 -top-5 ${openMenu ? 'w-full' : 'w-0'} transition-all duration-300 bg-white overflow-hidden`}>
              <div className={`md:hidden h-screen z-50 flex flex-col items-center justify-center`}>
                  <ul className={`flex flex-col gap-5 items-center`}>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><p className='cursor-pointer'>Sign in</p></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><GetStarted info="Get started"/></li>
                    <li className={`${openMenu ? 'w-fit' : 'w-0'}`}><Image onClick={() => {setOpenMenu(!openMenu); handleFixedBody(false)}}className='cursor-pointer' width={10} src={CloseAside} alt="Close button" /></li>
                  </ul>
              </div>
        </div>
    </header>
  )
}

export default Header