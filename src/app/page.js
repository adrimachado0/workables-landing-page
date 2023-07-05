import './globals.css'
import HomeTitle from "../../components/home/hometitle"
import HomeMain from "../../components/home/homemain"
import HomeMainSecondary from "../../components/home/HomeMainSecondary/homemainsecondary"
import HomeSpark from "../../components/home/HomeSpark/homespark"
import HomeFaqs from "../../components/home/HomeFaqs/homefaqs"
import HomeMusic from "../../components/home/HomeMusic/homemusic"
import HomeHelpYou from "../../components/home/HomeHelpYou/homehelpyou"
import HomeConnect from "../../components/home/HomeConnect/homeconnect"

export const metadata = {
  title: 'Workables - Creating lifelong memories',
  description: 'Workables app'
}

export default function Home() {
  return (
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
  )
}
