import React from 'react'
import { apple,bill,google } from '../assets'
import { layout } from '../style'
import styles from '../style'
import Button from './Button'
const Billing = () => {
  return (
    <section id='business' className={`${layout.sectionReverse}`}>
      <div className={`flex flex-col flex-1  ${styles.flexCenter}`}>
        <img src={bill} className="w-[530px] h-[455px] ml-[135px]"/>
      </div>
      <div className={`${layout.sectionInfo} flex flex-row`}>
        <h2 className={`${styles.heading2}`}>
        Easily control your <br className='sm:block hidden mb-24'/>billing & invoicing.
        </h2>
        <p className={`font-normal text-[16px] leading-[23px] mb-1 text-dimWhite mt-5 ${styles.paragraph} max-w-[470px]`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex flex-wrap space-x-3 object-contain flex-row sm:mt-10 mt1-6'>
          <img src={apple} alt="Apple" className='w-[128px] cursor-pointer'/>
          <img src={google} alt="Google" className='w-[128px] cursor-pointer'/>

        </div>
      </div>
    </section>
    )
}

export default Billing