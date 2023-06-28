'use client';
import './globals.css'

import { Providers } from '@/redux/provider'
import store from '@/redux/services/store'

export default function RootLayout({ children }) {

  return (
    <Providers store={store}>
      <html lang="en">
          {children}
      </html>
    </Providers>
  )
}
