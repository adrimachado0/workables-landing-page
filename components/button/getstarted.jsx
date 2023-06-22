import React from 'react'

const GetStarted = ({info}) => {
  return (
    <div>
        <a className='capitalize w-32 h-8 rounded-3xl text-white border-2 gradiente flex justify-center items-center border-none cursor-pointer'>{info}</a>
    </div>
  )
}

export default GetStarted