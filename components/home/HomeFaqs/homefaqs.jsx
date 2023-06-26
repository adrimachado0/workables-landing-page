'use client';

import React from 'react'
import { useState } from 'react'

import ThisAll from './img/thisAll.png'
import ReadyHear from './img/readyHear.png'
import GrowUp from './img/growUp.png'
import BestArtist from './img/bestArtist.png'

import HomeFaqsLeft from './homefaqsleft'
import HomeImages from './homeimages'

const faqsImages = {
    '1/4':ThisAll,
    '2/4':ReadyHear,
    '3/4':GrowUp,
    '4/4':BestArtist,
}


const HomeFaqs = () => {

    const [open, setOpen] = useState('1/4')

    return (
        <>
            <div className="my-52">
                <div className="rounded-3xl gradiente mx-auto md:w-2/3 p-0.5 lg:w-full">
                    <div className="h-full w-full rounded-3xl flex flex-col items-center lg:items-stretch lg:flex-row lg:justify-between bg-white py-6 lg:p-6 gap-5">
                        <HomeFaqsLeft open={open} setOpen={setOpen} />
                        <HomeImages faqsImage={faqsImages[open]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFaqs