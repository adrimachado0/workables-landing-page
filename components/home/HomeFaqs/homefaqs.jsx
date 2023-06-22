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
                <div className="rounded-3xl gradiente p-0.5">
                    <div className="rounded-3xl flex flex-col md:flex-row h-full w-full items-center justify-between bg-white p-3 gap-5">
                        <HomeFaqsLeft open={open} setOpen={setOpen} />
                        <HomeImages faqsImage={faqsImages[open]}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeFaqs