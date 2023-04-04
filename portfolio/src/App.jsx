import styles from './style';
import React from 'react'
import { Navbar , Hero ,Stats ,Business ,Billing ,Footer } from './components';

const App = () => ( 
      <div className='bg-primary w-full overflow-hidden text-cyan-400'>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
        </div>
        <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
          <Stats/>
          <Business/>
          <Billing/>
          <Footer/>
        </div>
        </div>
    </div>
);


export default App