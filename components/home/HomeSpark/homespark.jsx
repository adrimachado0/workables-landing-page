import React from 'react';
import HomeSparkMain from './homesparkmain';

const HomeSpark = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <h2 className='home-spark-title lowercase text-9xl opacity-10 nordique-bold'>Spark with us</h2>
        <div>
            <HomeSparkMain />
        </div>
        <p className='text-3xl nordique-regular'>Collaboration is the key to bringing brands{"'"} compaings to life.</p>
    </div>
  )
}

export default HomeSpark