import React, { FC } from 'react'
import { motion } from 'motion/react';
import classes from './ButtonInput.module.css'

interface ButtonInputProps {
  currentSelection: string;
  text: string;
  value: string;
  setFunc: (val: string) => void
}

const ButtonInput: FC<ButtonInputProps> = ({currentSelection, text, setFunc, value}) => {
  return (
    <motion.div
    initial={{backgroundColor: "#D9D9D9"}}
    animate={{backgroundColor: currentSelection == value ? "#000000" : "#D9D9D9"}}
    className={classes.buttonVariant}
    onClick={() => setFunc(value)}>
      <motion.h3
      initial={{color: "black"}}
      animate={{color: currentSelection == value ? "#FFFFFF" : "#000000"}}>
        {text}</motion.h3>
    </motion.div>
  )
}

export default ButtonInput
