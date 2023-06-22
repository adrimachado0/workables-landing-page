import React from 'react'
import { useState } from 'react'

import HomeFaqsComponents from './homefaqscomponents'


const HomeFaqsLeft = ({open, setOpen}) => {

    const handleButtonClick = (step) => {

        setOpen(step)
    }

    return (
    <div className='w-5/6 flex flex-col justify-between gap-3'>
        <HomeFaqsComponents open={open === '1/4' ? true : false} handleButtonClick={handleButtonClick} step='1/4' />
        <HomeFaqsComponents open={open === '2/4' ? true : false} handleButtonClick={handleButtonClick} step='2/4' />
        <HomeFaqsComponents open={open === '3/4' ? true : false} handleButtonClick={handleButtonClick} step='3/4' />
        <HomeFaqsComponents open={open === '4/4' ? true : false} handleButtonClick={handleButtonClick} step='4/4' />
    </div>
  )
}

export default HomeFaqsLeft