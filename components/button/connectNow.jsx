import React from 'react'

const ConnectNow = ({info}) => {
  return (
    <div className='gradiente p-[1px] rounded-lg w-fit mx-auto cursor-pointer'>
        <p className='text-white px-6 py-1 rounded-lg'>{info}</p>
    </div>
  )
}

export default ConnectNow