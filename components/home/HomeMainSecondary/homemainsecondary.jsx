'use client';

import React from 'react'
import HomeSecondaryComponent from './homesecondarycomponent'

import HomeStreamLine from './img/HomeStreamLine.png';
import HomeCalls from './img/HomeCalls.png';
import HomePlace from './img/HomePlace.png';


const HomeMainSecondary = () => {
  return (
    <div className='flex flex-wrap justify-around gap-20 my-52'>
        <HomeSecondaryComponent logo={{
            logo:HomeStreamLine,
            width:'128',
            height:'96'
            }} title='Streamline production' text='Manage your entire content creation process, from idea to delivery. Work with your team, track progress, and stay within budget.'/>
        <HomeSecondaryComponent logo={{
            logo:HomeCalls,
            width:'96',
            height:'96'
        }} title='No more calls & messaes' text="We match the best music studios in the world with the right talent for your project. Within seconds, they upload their sample and it's done."/>
        <HomeSecondaryComponent logo={{
            logo:HomePlace,
            width:'160',
            height:'60'
        }} title='All in one place' text='Stop losing time. At Workables you can manage your accounts, music production needs and finances in one single plattorm.'/>
    </div>
  )
}

export default HomeMainSecondary