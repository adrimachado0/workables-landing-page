import React from 'react';
import HomeSparkMain from './homesparkmain';

const HomeSpark = () => {
  return (
    <div className='flex flex-col items-center gap-5'>
        <h2 className='home-spark-title lowercase text-7xl md:text-9xl opacity-25 nordique-bold text-center'>Spark with us</h2>
        <div>
            <HomeSparkMain />
        </div>
        <p className='home-spark-title lowercase text-3xl md:text-5xl opacity-25 nordique-bold text-center'>Collaboration is the key to bringing brands{"'"} compaings to life.</p>
    </div>
  )
}

export default HomeSpark