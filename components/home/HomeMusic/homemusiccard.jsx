'use client'

import React from 'react'
import HomeMusicCardTable from './homemusiccardtable'

import { useState, useRef, useEffect } from 'react'

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
            <div className='flex flex-col items-center bg-[url("../../components/home/HomeMusic/img/BgLine.png")] bg-contain bg-center bg-no-repeat'>
              <div className='gradiente w-fit rounded-full p-1 relative'>
                <Image height={224} className='rounded-full' src={currentSong ? currentSong.icon : CardImage} alt='Image card' />
                <div className='flex items-center justify-center gap-28 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
                  {
                        currentSong && currentSong.id > 1
                        ?   <Image className='cursor-pointer' onClick={handleClickPrevious} width={27} height={25} src={CardPrevious} alt='Controller icon' />
                        :   <Image className=' opacity-0' width={27} height={25} src={CardPrevious} alt='Controller icon' />
                  }
                  {
                      currentSong && !pause
                      ? <Image className='cursor-pointer' onClick={handleClickPlay} src={CardPause} width={25} alt="Icon controller"/>
                      : <Image className='cursor-pointer' onClick={handleClickPlay} src={CardPlay} width={25} alt="Icon controller"/>
                  }
                  {
                        currentSong && currentSong.id < canciones.length
                        ?   <Image className='cursor-pointer' onClick={handleClickNext} width={27} height={25} src={CardNext} alt='Controller icon' />
                        :   <Image className=' opacity-0' width={27} height={25} src={CardNext} alt='Controller icon' />
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