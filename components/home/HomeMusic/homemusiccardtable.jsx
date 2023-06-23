'use client';
import React, { useState, useRef, useEffect } from 'react'
import HomeMusicCardTableSection from './homemusiccardtablesection'
import AudioControls from './audiocontrols'; 

import Image from 'next/image';

const HomeMusicCardTable = ({aside, setAside, audioRef, currentSong, setCurrentSong, canciones, setCanciones, pause, setPause}) => {

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
        <div className={`gradient-aside ${aside ? 'fixed' : 'hidden'} bottom-0 left-0 w-full pt-0.5 z-50`}>
          <div className='bg-white'>
            <div className='py-3 px-10 flex items-center gap-5'>
              <div className='flex gap-3 items-center'>
                <Image height={48} className='rounded-lg' src={currentSong.icon} alt="Icon music" />
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