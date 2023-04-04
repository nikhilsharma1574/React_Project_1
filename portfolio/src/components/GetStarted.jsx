import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] bg-blue-gradient rounded-full p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <p className='font-semibold text-gradient'>Get </p>
        <img src={arrowUp} alt="Arrow" className="h-[23px] w-[23px] "/>
        Started
      </div>
    </div>
  )
}

export default GetStarted