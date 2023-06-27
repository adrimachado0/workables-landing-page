import React from 'react'

import ConnectAudiences from './connectaudiences'
import ConnectPlaystore from './connectplaystore'

const HomeConnect = () => {
  return (
    <div className='grid grid-cols-[350px] md:grid-cols-[350px_350px] lg:grid-cols-[470px_470px] gap-10 justify-around'>
        <ConnectAudiences />
        <ConnectPlaystore />
    </div>
  )
}

export default HomeConnect