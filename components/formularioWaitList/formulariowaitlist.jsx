'use client';
import React from 'react'
import { useState } from 'react';
import useContactForm from '../../hooks/useContactForm';
import sendMail from '../../utils/sendMail';
import almacenarCorreo from '../../utils/almacenarCorreo';
import { useSelector, useDispatch } from 'react-redux';
import ErrorImage from './img/error.png'
import VerifiedImage from './img/verified.png'
import { fixedUnfixed } from '@/redux/features/fixedBody/fixedBody';

// Animaciones
import Loader from './animations/Loader.json'

// LottieFile
import Lottie from 'lottie-react'

import Image from 'next/image';

const FormularioWaitList = () => {

    const {values, handleChange} = useContactForm();
    const [body, setBody] = useState(false);
    const [bodyMensaje, setBodyMensaje] = useState({
        // img:ErrorImage,
        // title:'Ups! There was an error.',
        // text:'Please try again.'
    });
    const [isLoading, setIsLoading] = useState(false);

    const fixedBody = useSelector(state => state.fixed).value;
    const dispatch = useDispatch();

    const handleSubmit = async(e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(fixedUnfixed())
        setBody(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 2500)
        try {
            const response = await almacenarCorreo(values.email)
            if(response.data.mensaje === 'access') {
                try {
                    const req = await sendMail(values.email);
                    console.log('todo en orden')
                    setBodyMensaje({
                        img:VerifiedImage,
                        title:'We just send an email to your inbox',
                        text:'In a few of weekends you are going to receive the email that anunce that Workables its out.'
                    })
                } catch (e) {
                    console.log('error');
                    setBodyMensaje({
                        img:ErrorImage,
                        title:'Ups! There was an error.',
                        text:'Please try again.'
                    })
                }
            } else {
                console.log('Este mail ya esta registrado')
                setBodyMensaje({
                    img:ErrorImage,
                    title:'This email is already in use!',
                    text:'Please try again.'
                })
            }
        } catch (error) {
            console.log('ERRROR')
        }
    }

        // } catch (error) {
            
        // }
        
        // try {
            
        //     const response = await almacenarCorreo(values.email)
        //     if(response.data.mensaje === 'access') {
        //         try {
        //             const req = await sendMail(values.email);
        //             setBody(true)
        //             if (req.status === 250) {
        //                 setResponseMessage(
        //                     {isSuccessful: true, message: 'Thank you'}
        //                 );
        //             }
        //         } catch (e) {
        //             console.log(e);
        //             setResponseMessage({
        //                 isSuccessful: false,
        //                 message:'Error, intentalo denuevo'
        //             })
        //         }
        //     }

        // } catch (error) {
            
        // }

        // try {
        //     const response = await almacenarCorreo(values.email)
        //     console.log(response.data, 'xd'); // Muestra la respuesta del servidor en la consola del navegador

        //     try {
        //         if(response.data.mensaje === 'access') {

        //         }
        //     } catch (error) {
                
        //     }

        //   } catch (error) {
        //     console.error(error);
        //     return
        // }      

        // try {
        //     const req = await sendMail(values.email);
        //     setBody(true)
        //     if (req.status === 250) {
        //         setResponseMessage(
        //             {isSuccessful: true, message: 'Thank you'}
        //         );
        //     }
        // } catch (e) {
        //     console.log(e);
        //     setResponseMessage({
        //         isSuccessful: false,
        //         message:'Error, intentalo denuevo'
        //     })
        // }
    

    return (
        <div className='relative'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-4 md:flex-row md:gap-0'>
                <input id='email' value={values.email} onChange={handleChange} type='email' className="rounded-2xl w-60 h-8 pl-3 mr-3 shadow focus:outline-none" placeholder="example@gmail.com"/>
                <button type='submit' className="w-24 h-8 rounded-3xl shadow-md text-white border-2 gradiente flex justify-center items-center border-none cursor-pointer">Join us</button>
            </form>
            {
                body &&
                <div className='w-full h-full backdrop-blur-sm bg-white/30 fixed top-0 left-0 z-50'>
                    <div className='gradiente w-[700px] h-[400px] p-0.5 rounded-xl fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        <div className='w-full h-full bg-white rounded-xl flex flex-col items-center justify-center gap-3 md:gap-7'>
                            {
                                isLoading && 
                                        <div className='bg-white fixed top-1 left-1/2 -translate-x-1/2'>
                                            <Lottie animationData={Loader}/>
                                            <p className='text-center text-xl'>Loading...</p>
                                        </div>
                            }
                            <p onClick={() => {setBody(false); dispatch(fixedUnfixed())}} className='absolute top-7 right-7 cursor-pointer'>X</p>
                            <Image width={152} height={152} src={bodyMensaje.img} alt='Notification email send' />
                            <p className='text-2xl md:text-3xl nordique-semibold text-center'>{bodyMensaje.title}</p>
                            <p className='text-center'>{bodyMensaje.text}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default FormularioWaitList