'use client';
import React from 'react'

import Image from 'next/image';

const HomeMusicCardTableSection = ({setPause, canciones, currentSong, setCurrentSong, setAside, audioRef}) => {

  const handleButtonMusic = () => {

    if(currentSong && currentSong.music === canciones.music) {
      if(audioRef.current.paused) {
        setPause(false)
        return audioRef.current.play()
      } else {
        setPause(true)
        return audioRef.current.pause()
      }
    }
    setAside(true)
    setCurrentSong(canciones)
  }

  return (
        <div onClick={handleButtonMusic} className={`cursor-pointer bg-white w-full mt-0.5 first:mt-0 py-2 grid grid-cols-[65px_130px_80px_55px] sm:grid-cols-[65px_140px_100px_65px] md:grid-cols-[65px_170px_100px_100px] items-center px-2 md:px-5 last-of-type:rounded-b-3xl`}>
            <Image width={48} height={48} className='rounded' src={canciones.icon} alt="Logo singer image" />
            <p>{canciones.song}</p>
            <p className='text-gray-400 text-center'>{canciones.genre}</p>
            <p className='text-gray-400 text-end'>{canciones.duration}</p>
        </div>
  )
}

export default HomeMusicCardTableSection