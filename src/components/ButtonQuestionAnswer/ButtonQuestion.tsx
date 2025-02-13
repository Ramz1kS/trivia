import React, { FC, useState } from 'react'
import classes from './ButtonQuestion.module.css'
import { motion } from 'motion/react';

interface ButtonQuestionProps {
  children: React.ReactNode;
  isRight: boolean;
  setRightAnswers: React.Dispatch<React.SetStateAction<number>>;
  isAnswered: boolean;
  isSelected: boolean;
  questionNumber: number;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  text: string;
  delay: number;
}

const ButtonQuestion: FC<ButtonQuestionProps> = ({children, isRight, setRightAnswers, isAnswered, isSelected, questionNumber, setSelectedAnswers, text, delay}) => {
  const [isClicked, setIsClicked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const handleClick = () => {
    if (isSelected) {
      console.log("There's no need it clicking your answer TWICE")
      return
    }
    if (isAnswered) {
      console.log("Hey, you answered already!")
      return
    }
    setSelectedAnswers((prev) => {
      const newVal = [...prev]
      newVal[questionNumber - 1] = text
      return newVal
    })
    if (isRight) {
      setRightAnswers((prev) => ++prev)
      console.log("Right answer!")
    }
    else {
      console.log("...Nope")
    }
  }
  return (
    <motion.div
    transition={{delay: delay, duration: 0.1}}
    onMouseDown={() => setIsClicked(true)}
    onMouseUp={() => setIsClicked(false)}
    onHoverStart={() => setIsHovered(true)}
    onHoverEnd={() => setIsHovered(false)}
    className={classes.button}
    onClick={handleClick}>
      <motion.div
      initial={{backgroundColor: "#FFFFFF"}}
      animate={{backgroundColor: isRight && isAnswered ? "#23D86B" : isAnswered && isSelected ? "#FF3333" : "#FFFFFF" }}
      className={classes.upperSide}>
        {children}
      </motion.div>
      <motion.div
      key={questionNumber}
      initial={{height: 0}}
      // TODO: whileTap работает некорректно
      whileTap={{height: isAnswered ? 20 : 25}}
      animate={{height: isSelected ? 5 : isHovered ? 40 : 25}}
      transition={{duration: 0.2}}
      className={classes.lowerSide}></motion.div>
    </motion.div>
  )
}

export default ButtonQuestion
