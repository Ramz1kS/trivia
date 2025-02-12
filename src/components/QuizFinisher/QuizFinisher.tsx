import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import FinishConfirmer from '../FinishConfirmer/FinishConfirmer';

interface QuizFinisherProps {
  rightAnswers: number;
  totalCount: number;
}

const QuizFinisher: FC<QuizFinisherProps> = ({rightAnswers, totalCount}) => {
  const [isWindowNeeded, setIsWindowNeeded] = useState(false)
  const clickHandler = () => {
    setIsWindowNeeded(true)
  }
  return (
    <>
      <h2 style={{cursor: "pointer"}} onClick={clickHandler}>Finish the quiz</h2>
      {isWindowNeeded ? <FinishConfirmer rightCount={rightAnswers} totalCount={totalCount} setIsNeeded={setIsWindowNeeded}></FinishConfirmer> : <></>}
    </>
  )
}

export default QuizFinisher
