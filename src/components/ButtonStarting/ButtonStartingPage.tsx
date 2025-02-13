import React, { FC, useState } from 'react'
import classes from './ButtonStartingPage.module.css'
import { motion } from 'motion/react'

interface ButtonStartingPageProps {
  children: React.ReactNode;
  delay: number
}

const ButtonStartingPage: FC<ButtonStartingPageProps> = ({children, delay}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  return (
    <motion.div
    onMouseDown={() => setIsClicked(true)}
    onMouseUp={() => setIsClicked(false)}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
    className={classes.button}>
      <motion.div
      initial={{backgroundColor: "#FFFFFF"}}
      className={classes.upperSide}>
        {children}
      </motion.div>
      <motion.div
      initial={{height: 0}}
      // TODO: whileTap работает некорректно
      transition={{duration: 0.2}}
      animate={{height: isClicked ? 5 : isHovered ? 40 : 25}}
      className={classes.lowerSide}></motion.div>
    </motion.div>
  )
}

export default ButtonStartingPage
