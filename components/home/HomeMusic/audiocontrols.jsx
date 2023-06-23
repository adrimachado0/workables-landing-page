import React, { useState, useEffect, useCallback } from 'react'

import Image from 'next/image'

import Previous from './controlicon/previous.png'
import Next from './controlicon/next.png'
import Play from './controlicon/play.png'
import Pause from './controlicon/pause.png'

import CloseAside from './img/CloseAside.png'

const AudioControls = ({pause, setPause, audioRef, currentSong, setCurrentSong, canciones}) => {

    const handleClickPlay = () => {
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

    const [volume, setVolume] = useState(1)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        
        const audio = audioRef.current

        const handleTimeUpdate = () => setProgress(audio.currentTime )
        const handleDurationChange = () => setDuration(audio.duration)
        
        audioRef.current.addEventListener('timeupdate', handleTimeUpdate)
        audioRef.current.addEventListener('durationchange', handleDurationChange)
        
        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('durationchange', handleDurationChange)
        }
    }, [])

    const handleVolumeChange = useCallback((e) => {
        const newVolume = e.target.value;
        audioRef.current.volume = newVolume
        return setVolume(newVolume)
    })

    const handleProgressChange = useCallback(e => {

        const newProgress = e.target.value;
        audioRef.current.currentTime = newProgress;
        setProgress(newProgress);
    })

    return (
        <div className='w-full flex gap-3 items-center justify-around'>
            <div className='flex gap-4 items-center'>
                {
                    currentSong.id === 1
                    ?   <button>
                            <Image className='opacity-20 cursor-not-allowed' src={Previous} width={15} alt="Icon controller" />
                        </button>
                    :   <button onClick={handleClickPrevious}>
                            <Image src={Previous} width={15} alt="Icon controller" />
                        </button>
                }
                <button onClick={handleClickPlay} className='text-white focus:outline-none bg-black rounded-full w-10 h-10 flex justify-center items-center'>
                    {
                        pause
                        ? <Image src={Play} width={10} alt="Icon controller"/>
                        : <Image src={Pause} width={10} alt="Icon controller"/>
                    }
                </button>
                {
                    currentSong.id < canciones.length
                    ?   <button onClick={handleClickNext}>
                            <Image src={Next} width={15} alt="Icon controller" />
                        </button>
                    :   <button className='opacity-20 cursor-not-allowed'>
                            <Image src={Next} width={15} alt="Icon controller" />
                        </button>
                }
            </div>
            <div className='flex items-center'>
                <span className='mr-2'>
                    {(() => {
                        const formatearDuracion = (progress) => {
                        const minutos = Math.floor(progress / 60);
                        const segundos = Math.floor(progress % 60);
                        const minutosFormateados = String(minutos).padStart(2, '0');
                        const segundosFormateados = String(segundos).padStart(2, '0');
                        return `${minutosFormateados}:${segundosFormateados}`;
                        };

                        return formatearDuracion(progress);
                    })()}
                </span>
                <div className='relative w-[500px] h-1 bg-gray-400 rounded-full mr-2'>
                    <input 
                        type="range" 
                        className="absolute z-10 top-0 left-0 w-full h-full opacity-0 cursor-pointer" 
                        min={0}
                        max={duration}
                        step={1}
                        value={progress}
                        onChange={handleProgressChange} 
                    />
                    <div 
                        className="absolute top-0 left-0 h-full bg-black rounded-full"
                        style={{width: `${progress/duration * 100}%`}}
                    ></div>
                </div>
                <span className='mr-2'>
                    {(() => {
                        const formatearDuracion = (duration) => {
                        const minutos = Math.floor(duration / 60);
                        const segundos = Math.floor(duration % 60);
                        const minutosFormateados = String(minutos).padStart(2, '0');
                        const segundosFormateados = String(segundos).padStart(2, '0');
                        return `${minutosFormateados}:${segundosFormateados}`;
                        };

                        return formatearDuracion(duration);
                    })()}
                </span>
            </div>
            <div className='relative h-1 bg-gray-400 rounded-full mr-2 flex items-center'>
                <input 
                    type="range" 
                    className='w-[136px] h-1 rounded-full mr-2 opacity-0 z-10' 
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={handleVolumeChange}
                />
                <div
                    className='absolute top-0 left-0 h-full bg-black rounded-full'
                    style={{width:`${volume/1 * 100}%`}}
                ></div>
            </div>
            <Image className='cursor-pointer' onClick={() => setCurrentSong(null)} src={CloseAside} width={20} />
        </div>
    )
}

export default AudioControls