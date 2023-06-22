'use client';
import React, { useState, useRef, useEffect } from 'react'
import HomeMusicCardTableSection from './homemusiccardtablesection'
import AudioControls from './audiocontrols'; 

import GottaFeelingIcon from './songIcon/iGottaFeelingIcon.jpg'
import OneKissIcon from './songIcon/OneKissIcon.jpg'
import BonesIcon from './songIcon/bonesIcon.jpg'
import SummerIcon from './songIcon/summerIcon.jpg'


import Image from 'next/image';

const HomeMusicCardTable = () => {

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

  return (
    <div>
      {
        <div className={`gradiente rounded-b-4xl pt-0.5`}>
            {
              canciones.map( canciones => (
                <HomeMusicCardTableSection 
                  key={canciones.music}
                  canciones={canciones}
                  audioRef={audioRef}

                  currentSong={currentSong}
                  setCurrentSong={setCurrentSong}

                  aside={aside}
                  setAside={setAside}

                  setPause={setPause}
                />
              ))
            }
        </div>
      }
      {
        currentSong && 
        <div className={`gradient-aside ${aside ? 'fixed' : 'hidden'} bottom-0 left-0 w-full pt-1 z-50`}>
          <div className='bg-white'>
            <div className='py-5 px-10 flex items-center gap-5'>

              <div className='flex gap-5 items-center'>
                <Image className='w-14 rounded-lg' src={currentSong.icon} alt="Icon music" />
                <div className='w-36'>
                  <p>{currentSong.song}</p>
                  <p className='text-gray-400'>{currentSong.genre}</p>
                </div>
              </div>

              <audio
                  ref={audioRef}
                  src={currentSong.music}
                  autoPlay
              /> 

              <AudioControls pause={pause} setPause={setPause} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} canciones={canciones} setAside={setAside} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default HomeMusicCardTable