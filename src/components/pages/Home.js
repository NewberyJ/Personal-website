import React from 'react';
import '../../App.css';
import Content from '../../components/Content';
import { motion } from 'framer-motion';
import { animationOne } from '../../components/animations';




function Home() {
  return (
    <motion.div
      initial='out' animate='in' exit='out' variants={animationOne} transition='transition'
    >
      <Content />
    </motion.div>
  )
}

export default Home;
