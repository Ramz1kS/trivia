import React, { FC } from 'react'
import classes from './StartButton.module.css'
import { useNavigate } from 'react-router-dom';

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
    <div
      className={classes.startButton}
      onClick={clickHandle}>
      <h1>START</h1>
    </div>
  )
}

export default StartButton
