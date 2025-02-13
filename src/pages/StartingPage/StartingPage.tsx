import React from 'react'
import { Link } from 'react-router-dom'
import classes from './StartingPage.module.css'
import { motion } from 'motion/react'
import ButtonStartingPage from '../../components/ButtonStarting/ButtonStartingPage'

const StartingPage = () => {
  return (
    <motion.div 
    initial={{opacity: 1}}
    exit={{opacity: 0}}
    className={classes.pageCanvas}>
      <motion.h2
      initial={{y: -100, opacity: 0}}
      animate={{y: 0, opacity: 1}}>Question 1/1</motion.h2>
      <motion.h1
      initial={{opacity: 0}}
      animate={{opacity: 1}}>Are you on a trivia website?</motion.h1>
      <div className={classes.choice}>
          <Link to="/settings/first" className={classes.link}>
            <ButtonStartingPage delay={0.2}><h1>Yes</h1></ButtonStartingPage>
          </Link>
        <a href='https://www.youtube.com/watch?v=1oa6VM2GHoA' className={classes.link}>
          <ButtonStartingPage delay={0.4}><h1>No</h1></ButtonStartingPage>
        </a>
      </div>
    </motion.div>
  )
}

export default StartingPage
