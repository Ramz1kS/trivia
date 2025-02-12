import React, { FC, useState } from 'react'
import classes from './SideTabQuestions.module.css'
import QuestionListSideTab from './QuestionListSideTab';
import SideTabSummoner from './SideTabSummoner';

interface SideTabQuestionsProps {
  totalCount: number;
  setQuestionNumber: (val: number) => void
  currentQuestion: number;
  rightAnswers: number;
}

const SideTabQuestions: FC<SideTabQuestionsProps> = ({totalCount, setQuestionNumber, currentQuestion, rightAnswers}) => {
  const [isSummoned, setIsSummoned] = useState(false)
  return (
    <div className={classes.sideTabContainer}>
      <SideTabSummoner setIsSummoned={setIsSummoned}></SideTabSummoner>
      <QuestionListSideTab 
      isSummoned={isSummoned}
      setIsSummoned={setIsSummoned}
      totalCount={totalCount}
      setQuestionNumber={setQuestionNumber}
      currentQuestion={currentQuestion}
      rightAnswers={rightAnswers}></QuestionListSideTab>
    </div>
  )
}

export default SideTabQuestions
