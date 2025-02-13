import React from 'react'
import classes from './TryAgainButton.module.css'
import { motion } from 'motion/react'
import { useNavigate } from 'react-router-dom'

const TryAgainButton = () => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate("/settings/notfirst")
  }
  return (
    <div>
      <motion.h3 
      whileHover={{scale: 1.1}}
      whileTap={{scale: 0.9}}
      className={classes.button} 
      onClick={clickHandler}>Try again</motion.h3>
    </div>
  )
}

export default TryAgainButton
