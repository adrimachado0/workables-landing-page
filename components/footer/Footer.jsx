import React from 'react'
import Logo from './img/workables.png'

import instagramLogo from '../../assets/redes/instagramLogo.png'
import linkedinLogo from '../../assets/redes/linkedinLogo.png'
import mailLogo from '../../assets/redes/mailLogo.png'
import tiktokLogo from '../../assets/redes/tiktokLogo.png'
import twitterLogo from '../../assets/redes/twitterLogo.png'
import youtubeLogo from '../../assets/redes/youtubeLogo.png'

import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer md:h-96 flex md:justify-between items-center flex-col py-20 mt-52'>
        <div className='w-3/5 flex flex-col gap-5 items-center lg:items-stretch'>
            <Image className='w-12' src={Logo} alt="workables logo" />
            <div className='flex flex-col lg:flex-row lg:justify-between items-center gap-5 lg:gap-0'>
                <p className='font-bold'>Creating lifelong memories</p>
                <div className='flex gap-3 flex-wrap w-56 sm:w-fit justify-center'>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-5' src={twitterLogo} alt="Twitter logo" />
                    </div>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-6' src={instagramLogo} alt="Instagram logo" />
                    </div>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-6' src={tiktokLogo} alt="Tiktok logo" />
                    </div>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-5' src={linkedinLogo} alt="LinkedIn logo" />
                    </div>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-4' src={youtubeLogo} alt="YouTube logo" />
                    </div>
                    <div className='w-12 h-12 border-solid border-black border rounded-full flex justify-center items-center'>
                    <Image className='w-6 h-4' src={mailLogo} alt="Gmail logo" />
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-5 md:mt-0 flex flex-row gap-4 lg:justify-between justify-center w-3/5 flex-wrap'>
            <p className='font-bold text-workables-blue-0'>Workables</p>
            <p className='font-bold'>Privacy policy</p>
            <p className='font-bold'>Terms of service</p>
            <p className='font-bold'>Join research studies</p>
            <p className='text-center md:text-justify font-bold'>Feedback</p>
        </div>
    </footer>
  )
}

export default Footer