import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'motion/react';
import FinishConfirmer from '../FinishConfirmer/FinishConfirmer';

interface QuizFinisherProps {
  rightAnswers: number;
  totalCount: number;
  isNeeded: boolean;
}

const QuizFinisher: FC<QuizFinisherProps> = ({rightAnswers, totalCount, isNeeded}) => {
  const [isWindowNeeded, setIsWindowNeeded] = useState(false)
  const clickHandler = () => {
    if (!isNeeded)
      return
    setIsWindowNeeded(true)
  }
  return (
    <>
      <motion.h2 
      initial={{opacity: 0}}
      animate={{opacity: isNeeded ? 1 : 0}}
      style={{cursor: isNeeded ? "pointer" : "default"}} 
      onClick={clickHandler}>Finish the quiz</motion.h2>
      <FinishConfirmer rightCount={rightAnswers} totalCount={totalCount} isNeeded={isWindowNeeded} setIsNeeded={setIsWindowNeeded}></FinishConfirmer>
    </>
  )
}

export default QuizFinisher
