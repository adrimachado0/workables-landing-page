import React from 'react'

import ConnectAudiences from './connectaudiences'
import ConnectPlaystore from './connectplaystore'

const HomeConnect = () => {
  return (
    <div className='grid grid-cols-[1fr] md:grid-cols-[530px] lg:grid-cols-[490px_490px] gap-5 lg:gap-3 xl:grid-cols-[600px_600px] xl:gap-10 justify-around'>
        <ConnectAudiences />
        <ConnectPlaystore />
    </div>
  )
}

export default HomeConnect