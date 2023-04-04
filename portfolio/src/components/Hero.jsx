import React from 'react'
import { discount,robot } from '../assets'
import GetStarted from './GetStarted'
import styles from '../style'
const Hero = () => {
  return(
    <section id="home" className={'flex md:flex-row flex-col text-white mt-6'}>
      <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount_image" className='h-[32px] w-[32px] object-contain'/>
          <p className={`${styles.paragraph} ml-2 mr-2`}>
          <span className='text-white font-semibold'> 20% </span>
          Discount for {" "}
          <span className='text-white font-semibold'> 1 Month </span>
          Account
          </p>
        </div>

        <div className='flex flex-row w-full items-center justify-between'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>The Next<br className="sm:block hidden"/>{" "}
          <span className='text-gradient'>Generation</span><br/>{" "}
          Payment Method</h1>
          <div className='ss:flex hidden md:m-4 mr-0'>
            <GetStarted/>
          </div>
        </div>

        <div className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          <p className={`${styles.paragraph} max-w-[470px] text-sm mt-6 mb-6`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
        </div>
      </div>

      <div className={`flex flex-1 ${styles.flexCenter} relative`}>
          <img src={robot} alt="Robot" className='w-[100%] h-[100%] relative z-5 object-contain'/>
          <div className='absolute z-0  w-[40%] h-[30%] top-0 pink__gradient'/>
          <div className='absolute z-1 rounded-full  w-[50%] h-[50%] bottom-[40px] white__gradient'/>
          <div className='absolute z-0  w-[40%] h-[30%] top-0 pink__gradient'/>
      </div>    

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
    
  )
}

export default Hero