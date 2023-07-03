'use client';
import React from 'react'
import { useState } from 'react';
import useContactForm from '../../hooks/useContactForm';
import sendMail from '../../utils/sendMail';

const FormularioWaitList = () => {

    const {values, handleChange} = useContactForm();
    const [responseMessage, setResponseMessage] = useState({isSuccessful: false, message:''});

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const req = await sendMail(values.email);
            if (req.status === 250) {
                setResponseMessage(
                    {isSuccessful: true, message: 'Thank you'}
                );
            }
        } catch (e) {
            console.log(e);
            setResponseMessage({
                isSuccessful: false,
                message:'Error, intentalo denuevo'
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center gap-4 md:flex-row md:gap-0'>
            <input id='email' value={values.email} onChange={handleChange} type='email' className="rounded-2xl w-60 h-8 pl-5 mr-3 shadow focus:outline-none" placeholder="example@gmail.com"/>
            <button type='submit' className="capitalize w-24 h-8 rounded-3xl shadow-md text-white border-2 gradiente flex justify-center items-center border-none cursor-pointer">Join us</button>
        </form>
    )
}

export default FormularioWaitList