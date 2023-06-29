'use client';
import './globals.css'

import { Providers } from '@/redux/provider'
import store from '@/redux/services/store'

import { useState, } from 'react';
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { Questrial } from '@next/font/google'

const questrial = Questrial({
  subsets:['latin'],
  weight:['400']
})

export default function RootLayout({ children }) {

  const [fixed, setFixed] = useState(false)

  return (
    <Providers store={store}>
      <html lang="en">
      <body className={`${questrial.className} bg-[url('../../public/Backgrounds.webp')] bg-cover bg-no-repeat ${fixed ? 'overflow-hidden' : ''} `}>
        <Header fixed={fixed} setFixed={setFixed} />
          {children}
        <Footer />
      </body>
      </html>
    </Providers>
  )
}
