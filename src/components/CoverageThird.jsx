import React from 'react'

const CoverageThird = () => {
  return (
    <div className='bg-heroFour py-[6rem] px-[8rem] flex gap-[5rem] sm:py-[3rem] sm:px-[1rem] sm:gap-[2rem] sm:flex sm:flex-col'>
        <div className='text-white w-[50%] py-[2rem] sm:w-[100%] sm:py-2'>
            <p className='font-medium text-[4rem] sm:font-medium sm:text-[2rem]'>Make a mark in your industry</p>
            <p className='font-medium text-[1.7rem] sm:font-medium sm:text-[1.1rem]'>Building a business that needs secure and reliable access to financial data and payments? We're happy to learn about your business and support you to create better financial experiences for your users with Mono's products.</p>
        </div>
        <div className='w-[50%] sm:w-[100%]'>
            <form className='bg-white py-[1rem] px-[2rem] w-[80%] rounded-xl sm:w-[100%]'>
                <div className='flex flex-col gap-3 py-4'>
                    <label>Email</label>
                    <input type='text' placeholder='Enter email' className='rounded-md py-[0.7rem] px-2 ring-transparent border-solid border-2'/>
                </div>
                <div className='flex flex-col gap-3 py-4'>
                    <label>Company name</label>
                    <input type='text' placeholder='Enter name' className='rounded-md py-[0.7rem] px-2 ring-transparent border-solid border-2'/>
                </div>
                <div className='flex flex-col gap-3 py-4'>
                    <label>Industry</label>
                    <select className='rounded-md py-[0.7rem] px-2 ring-transparent border-solid border-2'>
                        <option>Select Industry</option>
                    </select>
                </div>
                <div className='flex flex-col gap-3 py-4'>
                    <label>What are you looking to build with Mono?</label>
                    <textarea placeholder='Tell us more' rows="5" className='rounded-md py-[0.7rem] px-2 border-solid border-2'></textarea>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CoverageThird