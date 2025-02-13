import React, { FC } from 'react'
import classes from './QuestionListSideTab.module.css'
import QuizFinisher from '../QuizFinisher/QuizFinisher';
import { AnimatePresence, motion } from 'motion/react'
import SideTabButton from './SideTabButton';

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
    links.push(<SideTabButton 
      onClick={() => {setQuestionNumber(i + 1)}}
      selectedQuestion={currentQuestion}
      questionVal={i + 1}></SideTabButton>)
  }
  return (
    <AnimatePresence>
      {isSummoned ? <>
      <motion.div 
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className={classes.darkBackground}
      onClick={() => setIsSummoned(false)}></motion.div>
        <motion.div
        initial={{x: -300}}
        animate={{x: 0}}
        exit={{x: -300}} 
        transition={{duration: 0.2}}
        className={classes.menu}>
          {links}
          <QuizFinisher isNeeded={true} totalCount={totalCount} rightAnswers={rightAnswers}></QuizFinisher>
        </motion.div>
      </> 
      : null}
    </AnimatePresence>
  )
}

export default QuestionListSideTab
