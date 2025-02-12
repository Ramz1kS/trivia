import React, { FC } from 'react'
import classes from './QuestionListSideTab.module.css'
import QuizFinisher from '../QuizFinisher/QuizFinisher';

interface QuestionListSideTabProps {
  isSummoned: boolean;
  setIsSummoned: (val: boolean) => void;
  totalCount: number;
  currentQuestion: number;
  setQuestionNumber: (val: number) => void
  rightAnswers: number;
}

const QuestionListSideTab: FC<QuestionListSideTabProps> = ({isSummoned, setIsSummoned, totalCount, currentQuestion, setQuestionNumber, rightAnswers}) => {
  const links = []
  for (let i = 0; i < totalCount; i++) {
    links.push(<h2 key={i + 1}
    onClick={() => setQuestionNumber(i + 1)}
    style={{
      fontWeight: currentQuestion == i + 1 ? 600 : 400
    }}>Question {i + 1}</h2>)
  }
  return (
    <>
      {isSummoned ? <>
      <div className={classes.darkBackground}
      onClick={() => setIsSummoned(false)}></div>
        <div className={classes.menu}>
          {links}
          <QuizFinisher totalCount={totalCount} rightAnswers={rightAnswers}></QuizFinisher>
        </div>
      </> 
      : <></>}
    </>
  )
}

export default QuestionListSideTab
