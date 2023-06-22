import React from 'react'
import HomeMusicCardTable from './homemusiccardtable'

import CardImage from './img/CardImage.png'

import CardNext from './img/CardNext.png'
import CardPrevious from './img/CardPrevious.png'
import CardPlay from './img/CardPlay.png'
import CardPause from './img/CardPause.png'


import Image from 'next/image'

const HomeMusicCard = () => {
  return (
    <div className=''>
      <div className='gradiente rounded-5xl p-0.5'>
        <div className='overflow-hidden pt-5 pb-3 bg-white flex flex-col gap-3 rounded-5xl'>
            <div className='-mx-1.5 flex flex-col items-center bg-[url("../../components/home/HomeMusic/img/BgLine.png")] bg-contain bg-center bg-no-repeat'>
              <div className='gradiente w-fit rounded-full p-1 relative'>
                <Image height={224} src={CardImage} alt='Image card' />
                <div className='flex items-center justify-center gap-28 absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  <Image width={27} height={25} src={CardPrevious} alt='Controller icon' />
                  <Image width={35} height={40} src={CardPlay} alt='Controller icon' />
                  <Image width={27} height={25} src={CardNext} alt='Controller icon' />
                </div>
              </div>
            </div>
            <HomeMusicCardTable />
        </div>
      </div>
    </div>
  )
}

export default HomeMusicCard