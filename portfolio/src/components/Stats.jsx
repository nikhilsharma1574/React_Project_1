import React from 'react'
import { stats } from '../constants'
import styles from '../style'
const Stats = () => {
  return (
    <section className={`${styles.flexCenter} flex flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat)=>(
        <div key={stat.id} className={`flex-1 flex`}>
          <h4 className='font-semibold font-poppins text-white text-[30px] xs:text-[40px] m-3'>{stat.value} </h4>
          <p className='flex font-poppins text-gradient justify-start items-center xs:text-[20px] text-[15px] uppercase'>{stat.title}</p>
        </div> 
      ))}
    </section>
  )
}

export default Stats