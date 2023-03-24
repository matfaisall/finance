import React from 'react'
import Laptop from '../assets/img/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt="" />
        <div className='flex flex-col justify-center text-center md:text-start'>
          <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dashboard</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo recusandae commodi labore cumque rerum atque ab expedita vero quidem iusto? Magnam numquam aperiam et delectus praesentium alias nemo, expedita voluptas!</p>
          <button className='bg-black w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0 hover:bg-[#00dfbf] text-white'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics