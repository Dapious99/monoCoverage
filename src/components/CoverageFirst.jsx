import React from 'react'

const CoverageFirst = () => {
  return (
    <div className='px-[8rem] font-DM-sans text-center sm:px-[1rem]'>
        <p className='font-bold text-[7.5rem] sm:text-[2rem]'>Mono’s pulse across the continent</p> 
        <p className=' font-normal text-[1.5rem] pb-5 sm:font-normal sm:text-[1.2rem]'>30+ financial institutions and counting</p>
        <div className="flex justify-center gap-[2rem] py-[2rem] items-center sm:flex sm:justify-center sm:gap-[1rem]">
            <p className=''>Nigeria</p>
            <p>Ghana</p>
            <p>Kenya</p>
            <p>South Africa</p>
        </div>
        <input placeholder='Search Institution' type='text' className='py-[0.8rem] px-3 bg-[#f5f5f5] rounded-[2rem] my-[1rem] border-solid border-2 border-black-600 ring-transparent w-[100%] sm:w-[100%]' />
    </div>
  )
}

export default CoverageFirst