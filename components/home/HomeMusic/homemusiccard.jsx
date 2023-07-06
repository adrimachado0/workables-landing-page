'use client'

import React from 'react'
import HomeMusicCardTable from './homemusiccardtable'

import { useState, useRef, useEffect } from 'react'

import BgLine from './img/BgLine.png'
import CardImage from './img/CardImage.png'

import GottaFeelingIcon from './songIcon/iGottaFeelingIcon.jpg'
import OneKissIcon from './songIcon/OneKissIcon.jpg'
import BonesIcon from './songIcon/bonesIcon.jpg'
import SummerIcon from './songIcon/summerIcon.jpg'

import CardNext from './img/CardNext.png'
import CardPrevious from './img/CardPrevious.png'
import CardPlay from './img/CardPlay.png'
import CardPause from './img/CardPause.png'


import Image from 'next/image'

const HomeMusicCard = () => {


  const [aside, setAside] = useState(false)
  const audioRef = useRef()
  const [currentSong, setCurrentSong] = useState(null);
  const [canciones, setCanciones] = useState([
    {
      music:'/feeling.mp3',
      song:'I Gotta Feeling',
      genre:'Pop',
      duration:'4:49',
      icon:GottaFeelingIcon,
      id:1
    },
    {
      music:'/oneKiss.mp3',
      song:'One Kiss',
      genre:'Dance Pop',
      duration:'3:43',
      icon:OneKissIcon,
      id:2
    },
    {
      music:'/bones.mp3',
      song:'Bones',
      genre:'Rock',
      duration:'2:45',
      icon:BonesIcon,
      id:3
    },
    {
      music:'/summer.mp3',
      song:'Summer',
      genre:'House',
      duration:'3:54',
      icon:SummerIcon,
      id:4
    },
  ])

  const [pause, setPause] = useState(false)

  useEffect(() => {
    setPause(false)
  }, [currentSong])


  const handleClickPlay = () => {
    if(!audioRef.current) return
    if(audioRef.current.paused) {
        setPause(false)
        return audioRef.current.play()
    } else {
        setPause(true)
        return audioRef.current.pause()
    }
  }

  const handleClickPrevious = () => {
      const cancionPrevia = canciones.filter(cancion => cancion.id === currentSong.id - 1)
      setCurrentSong(cancionPrevia[0])
  }

  const handleClickNext = () => {
      const cancionPrevia = canciones.filter(cancion => cancion.id === currentSong.id + 1)
      setCurrentSong(cancionPrevia[0])
  }

  return (
    <div className=''>
      <div className='gradiente rounded-5xl p-0.5'>
        <div className='overflow-hidden pt-5 pb-3 bg-white flex flex-col gap-3 rounded-5xl'>
            <div className='flex flex-col items-center'>
              <Image width={476} className='absolute mt-10 hidden md:block' src={BgLine} alt='Bg line'/>
              <Image width={351} className='absolute mt-10 md:hidden' src={BgLine} alt='Bg line'/>
              <div className='gradiente w-[232px] h-[232px] rounded-full p-1 relative'>
                <Image className='rounded-full w-[224px] h-[224px]' src={currentSong ? currentSong.icon : CardImage} alt='Image card' />
                <div className='flex w-[300px] justify-between items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  {
                        currentSong && currentSong.id > 1
                        ?   <Image className='w-[27px] h-[25px] cursor-pointer' onClick={handleClickPrevious} src={CardPrevious} alt='Controller icon' />
                        :   <Image className='w-[27px] h-[25px]  opacity-0' src={CardPrevious} alt='Controller icon' />
                  }
                  {
                      currentSong && !pause
                      ? <Image className='w-[23px] h-[27px] cursor-pointer' onClick={handleClickPlay} src={CardPause} alt="Icon controller"/>
                      : <Image className='w-[23px] h-[27px] cursor-pointer' onClick={handleClickPlay} src={CardPlay} alt="Icon controller"/>
                  }
                  {
                        currentSong && currentSong.id < canciones.length
                        ?   <Image className='w-[27px] h-[25px] cursor-pointer' onClick={handleClickNext} src={CardNext} alt='Controller icon' />
                        :   <Image className='w-[27px] h-[25px] opacity-0' src={CardNext} alt='Controller icon' />
                  }
                </div>
              </div>
            </div>
            <HomeMusicCardTable
              aside={aside} 
              setAside={setAside} 
              audioRef={audioRef} 
              currentSong={currentSong} 
              setCurrentSong={setCurrentSong} 
              canciones={canciones} 
              setCanciones={setCanciones} 
              pause={pause}
              setPause={setPause}
            />
        </div>
      </div>
    </div>
  )
}

export default HomeMusicCard