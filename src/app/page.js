'use client';
import './globals.css'

import { useSelector } from 'react-redux';

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Questrial } from '@next/font/google'

const questrial = Questrial({
  subsets:['latin'],
  weight:['400']
})

import HomeTitle from "../../components/home/hometitle"
import HomeMain from "../../components/home/homemain"
import HomeMainSecondary from "../../components/home/HomeMainSecondary/homemainsecondary"
import HomeSpark from "../../components/home/HomeSpark/homespark"
import HomeFaqs from "../../components/home/HomeFaqs/homefaqs"
import HomeMusic from "../../components/home/HomeMusic/homemusic"
import HomeHelpYou from "../../components/home/HomeHelpYou/homehelpyou"
import HomeConnect from "../../components/home/HomeConnect/homeconnect"

export default function Home() {

  const fixed = useSelector(state => state.fixed)

  return (
    <body className={`${questrial.className} bg-[url('../../public/Backgrounds.webp')] ${fixed.value ? 'overflow-hidden' : ''}`}>
      <Header />
        <div className="xl:mx-auto max-w-7xl mx-5">
            <HomeTitle />      
            <HomeMain />      
            <HomeMainSecondary />      
            <HomeSpark />      
            <HomeFaqs />      
            <HomeMusic />    
            <HomeHelpYou />
            <HomeConnect />  
        </div>     
      <Footer />
    </body>
  )
}
