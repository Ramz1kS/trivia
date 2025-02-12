import React, { FC } from 'react'
import classes from './ButtonQuestion.module.css'

interface ButtonQuestionProps {
  children: React.ReactNode;
  isRight: boolean;
  setRightAnswers: React.Dispatch<React.SetStateAction<number>>;
  isAnswered: boolean;
  isSelected: boolean;
  questionNumber: number;
  setSelectedAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  text: string;
}

const ButtonQuestion: FC<ButtonQuestionProps> = ({children, isRight, setRightAnswers, isAnswered, isSelected, questionNumber, setSelectedAnswers, text}) => {
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
    <div 
    className={classes.button}
    onClick={handleClick}>
      <div 
      className={classes.upperSide}
      style={{
        backgroundColor: isRight && isAnswered ? "#23D86B" : isAnswered && isSelected ? "#FF3333" : "white"
      }}>      
        {children}
      </div>
      <div 
      className={classes.lowerSide}
      style={{
        height: isSelected ? "5px" : "25px"
      }}></div>
    </div>
  )
}

export default ButtonQuestion
