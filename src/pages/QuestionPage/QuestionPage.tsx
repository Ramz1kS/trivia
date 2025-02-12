import React, { FC, useEffect, useMemo, useState } from 'react'
import classes from './QuestionPage.module.css'
import { question } from '../../types';
import ButtonQuestion from '../../components/ButtonQuestionAnswer/ButtonQuestion';
import ButtonQuestionSwitch from '../../components/ButtonQuestionSwitch/ButtonQuestionSwitch';
import SideTabQuestions from '../../components/SideTabQuestions/SideTabQuestions';
import QuizFinisher from '../../components/QuizFinisher/QuizFinisher';

interface QuestionPageProps {
  totalCount: number;
  questions: question[]
}

const shuffleAnswers = (arr: string[]) => {
  const shuffled = [...arr]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const QuestionPage: FC<QuestionPageProps> = ({totalCount, questions}) => {
  const [currQuestion, setCurrQuestion] = useState(1)
  const [rightAnswersCount, setRightAnswersCount] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    // Массив выбранных ответов. Если ответ не выбран, то значение - "None"
    const retVal: string[] = Array(totalCount)
    for (let i = 0; i < totalCount; i++)
      retVal[i] = "None"
    return retVal
  })
  const answers = useMemo<string[]>(() => {
    const questionData = questions[currQuestion - 1]
    return shuffleAnswers([...questionData.incorrect_answers, questionData.correct_answer])
  }, [currQuestion, questions])
  const answeredCount = selectedAnswers.filter((item) => item != "None").length
  return (
    <>
    <SideTabQuestions
    totalCount={totalCount}
    setQuestionNumber={setCurrQuestion}
    currentQuestion={currQuestion}
    rightAnswers={rightAnswersCount}></SideTabQuestions>
    <div className={classes.pageCanvas}>
      <div className={classes.countAndFinisher}>
        <div className={classes.countContainer}>
          <ButtonQuestionSwitch isNext={false} setNumber={setCurrQuestion} notActive={currQuestion == 1}></ButtonQuestionSwitch>
          <h2>Queston {currQuestion}/{totalCount}</h2>
          <ButtonQuestionSwitch isNext={true} setNumber={setCurrQuestion} notActive={currQuestion == totalCount}></ButtonQuestionSwitch>
        </div>
        <div style={{display: answeredCount == totalCount ? "block" : "none"}}>
          <QuizFinisher rightAnswers={rightAnswersCount} totalCount={totalCount}></QuizFinisher>
        </div>
      </div>
      <h1 className={classes.questionText}>{decodeURIComponent(questions[currQuestion - 1].question)}</h1>
      <div className={classes.choice}>
        {answers.map((item, index) => 
        <ButtonQuestion 
        key={index}
        isRight={item == questions[currQuestion - 1].correct_answer}
        setRightAnswers={setRightAnswersCount}
        isAnswered={selectedAnswers[currQuestion - 1] != "None"}
        isSelected={selectedAnswers[currQuestion - 1] == item}
        questionNumber={currQuestion}
        setSelectedAnswers={setSelectedAnswers}
        text={item}>
          <h2>{decodeURIComponent(item)}</h2>
        </ButtonQuestion>)}
      </div>
    </div>
    </>
  )
}

export default QuestionPage
