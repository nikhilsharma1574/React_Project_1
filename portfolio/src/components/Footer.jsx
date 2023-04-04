import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../constants'
const Fotter = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY}`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8 font-poppins`}>


        <div className='flex flex-col flex-1 justify-start m-10'>
          <img src={logo} alt="Logo" className='w-[266px] h-[72px] object-contain'/>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make the payments easy, reliable and secure.</p>
        </div>


        <div className='flex-[1.5] w-full flex flex-row flex-wrap md:mt-0 mt-10 justify-between '>
          {footerLinks.map((footerLinks) => (
            <div className='flex flex-col min-w-[150px]' key={footerLinks.key}>
              <h4 className='text-white font-semibold mb-4 cursor-pointer'>
                {footerLinks.title}
              </h4>
              <ul>
                {footerLinks.links.map((link,index) =>(
                  <li className='font-normal text-dimWhite leading-8 cursor-pointer'>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Fotter