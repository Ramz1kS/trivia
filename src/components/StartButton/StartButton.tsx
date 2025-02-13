import React, { FC } from 'react'
import classes from './StartButton.module.css'
import { useNavigate } from 'react-router-dom'
import { motion } from 'motion/react'

interface StartButtonProps {
  questionCount: number;
  categoryId: number;
  difficulty: string;
  type: string;
  setCountError: (val: boolean) => void;
  setCategoryError: (val: boolean) => void;
}

const StartButton: FC<StartButtonProps> = ({questionCount, categoryId, difficulty, type, setCountError, setCategoryError}) => {
  const navigate = useNavigate()
  const clickHandle = () => {
    setCountError(questionCount < 10 || questionCount > 50)
    setCategoryError(categoryId === 0)
    if (categoryId === 0 || questionCount < 10 || questionCount > 50)
      return
    else {
      navigate(`/game/${questionCount}/${categoryId}/${difficulty}/${type}`)
    }
  }
  return (
    <motion.div
    initial={{x: -500, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 0.3, delay: 0.4}} 
    whileHover={{
      scale: 1.1,
      transition: {
        duration: 0.125
      }
    }}
    whileTap={{
      scale: 0.9,
      transition: {
        duration: 0.125
      }
    }}
    className={classes.startButton}
    onClick={clickHandle}>
      <h1>START</h1>
    </motion.div>
  )
}

export default StartButton
