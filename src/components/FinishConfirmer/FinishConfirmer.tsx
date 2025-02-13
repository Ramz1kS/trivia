import React, { FC } from 'react'
import classes from './FinishConfirmer.module.css'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'

interface FinishConfirmerProps {
  rightCount: number;
  totalCount: number;
  setIsNeeded: (val: boolean) => void;
  isNeeded: boolean
}

const FinishConfirmer: FC<FinishConfirmerProps> = ({rightCount, totalCount, isNeeded, setIsNeeded}) => {
  const remove = () => setIsNeeded(false) 
  const navigate = useNavigate()
  return (
    <AnimatePresence>
    { isNeeded ? <motion.div 
    initial={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.1}}
    className={classes.container}>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      className={classes.darkBackground} onClick={remove}></motion.div>
      <div className={classes.centerer}>
        <motion.div 
        initial={{scale: 0}}
        animate={{scale: 1}}
        className={classes.window}>
          <h2>Are you sure you want to finish this quiz?</h2>
          <div className={classes.choice}>
            <motion.h3
            className={classes.button}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} 
            onClick={() => navigate(`/results/${rightCount}/${totalCount}`)}>Yes</motion.h3>
            <motion.h3
            className={classes.button}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}} 
            onClick={remove}>No</motion.h3>
          </div>
        </motion.div>
      </div>
    </motion.div> : null}
    </AnimatePresence>
  )
}

export default FinishConfirmer
