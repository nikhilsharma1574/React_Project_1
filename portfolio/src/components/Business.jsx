import React from 'react'
import styles from '../style'
import { features } from '../constants'
import { layout } from '../style'
import Button from './Button'

const Featurecard = ({icon , title , content , index,name}) =>(
  <div className='flex flex-row p-4 rounded-md feature-card my-4'>
    <div className={`h-64px w-64px bg-dimBlue rounded-full p-2 ${styles.flexCenter}`}>
      <img src={icon} alt="Icon" className={`h-16px w-16px object-contain`}/>
    </div>
    <div className=' flex flex-1 flex-col ml-4 font-poppins '>
      <h4 className='font-bold text-[18px] leading-[23px] mb-1 text-white'>
      {title}
      </h4>
      <p className='font-normal text-[16px] leading-[23px] mb-1 text-dimWhite'>
        {content}
      </p>
    </div>
  </div>
)
const Business = () => {
  return (
    <section id='Business' className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
        You do the business,<br className='sm:block hidden'/> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] text-sm mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <div className='mt-10'>
          <Button/>
        </div>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature,index)=>(
            <Featurecard key={feature.id}{...feature} index={index}/>
          ))}
      </div>
    </section>
  )
}

export default Business