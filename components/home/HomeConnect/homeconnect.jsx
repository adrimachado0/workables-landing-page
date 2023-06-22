import React from 'react'

import ConnectAudiences from './connectaudiences'
import ConnectPlaystore from './connectplaystore'

const HomeConnect = () => {
  return (
    <div className='grid grid-cols-[524px_524px] justify-around'>
        <ConnectAudiences />
        <ConnectPlaystore />
    </div>
  )
}

export default HomeConnect