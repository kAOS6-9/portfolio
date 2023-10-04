import React from 'react'
import { motion } from "framer-motion";
import { styles } from '../styles';
import { textVariant } from "../utils/motion";
import { analysed, capgemini, hamiters, spanrig, watermelon, zydus, equals, euman, sun, tiyash } from '../assets';

const Tech = () => {
  return (
    <div className='centur'>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} flex justify-evenly items-center`}>organizations I've collaborated with</p>
      </motion.div>
      <div className='slider'>
        <ul className='brands'>
          <li className='brand-logo'><img src={capgemini} alt="" /></li>
          <li className='brand-logo'><img src={analysed} alt="" /></li>
          <li className='brand-logo'><img src={equals} alt="" /></li>
          <li className='brand-logo'><img src={euman} alt="" /></li>
          <li className='brand-logo'><img src={hamiters} alt="" /></li>
          <li className='brand-logo'><img src={spanrig} alt="" /></li>
          <li className='brand-logo'><img src={sun} alt="" /></li>
          <li className='brand-logo'><img src={tiyash} alt="" /></li>
          <li className='brand-logo'><img src={watermelon} alt="" /></li>
          <li className='brand-logo'><img src={zydus} alt="" /></li>

          <li className='brand-logo'><img src={capgemini} alt="" /></li>
          <li className='brand-logo'><img src={analysed} alt="" /></li>
          <li className='brand-logo'><img src={equals} alt="" /></li>
          <li className='brand-logo'><img src={euman} alt="" /></li>
          <li className='brand-logo'><img src={hamiters} alt="" /></li>
          <li className='brand-logo'><img src={spanrig} alt="" /></li>
          <li className='brand-logo'><img src={sun} alt="" /></li>
          <li className='brand-logo'><img src={tiyash} alt="" /></li>
          <li className='brand-logo'><img src={watermelon} alt="" /></li>
          <li className='brand-logo'><img src={zydus} alt="" /></li>
        </ul>
      </div>
    </div>
  )
}

export default Tech