'use client';
import React from 'react'
import Diamond from './img/SparkDiamond.png'
import Peoples from './img/SparkPeoples.png'
import Message from './img/SparkMessage.png'

import HomeSparkMainComponent from './homesparkmaincomponent'

const HomeSparkMain = () => {
  return (
    <div className='flex gap-10'>
        <HomeSparkMainComponent logo={{logo:Diamond}} title='Expertise and quality' text='+15,000 artists from across the globe collaborate to deliver the highest quality brand experiences.' />
        <HomeSparkMainComponent logo={{logo:Peoples}} title='customer-centricity era' text='Our multi-channel mapping technology makes your experience better in a world of new media'/>
        <HomeSparkMainComponent logo={{logo:Message}} title='engaging more deeply' text='Our original pieces help targeted personalized ads reach an ultra-demand market.' />
    </div>
  )
}

export default HomeSparkMain