import React, { FC, useEffect, useState } from 'react'
import classes from './SettingsPage.module.css'
import SettingsList from '../../components/SettingsList/SettingsList'
import { useParams } from 'react-router-dom'
import StartButton from '../../components/StartButton/StartButton'
import { motion } from "motion/react"
import ErrorMessageSettings from '../../components/ErrorMessageSettings/ErrorMessageSettings'


const SettingsPage: FC = () => {
  const { first } = useParams()
  const isFirstVisit = first == "first"
  // Все эти состояния можно было бы обернуть в отдельный объект, но 
  // мучиться с Typescript-ом я не очень хочу. Пусть будет 8 пропсов для SettingsList ЛОЛ
  const [questionCount, setQuestionCount] = useState<number>(10)
  const [categoryId, setCategoryId] = useState<number>(0)
  const [currDifficulty, setCurrDifficulty] = useState<string>("any")
  const [currType, setCurrType] = useState<string>("any")

  const [showCountError, setShowCountError] = useState(false)
  const [showCategoryError, setShowCategoryError] = useState(false)
  return (
    <div className={classes.pageCanvas}>
      <motion.h1
        initial={{x: -500, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.3}}
        className={classes.pleaseConfigure}>
        {isFirstVisit ? "Great! In that case please customize your question pool" : "Please customize your question pool"}
      </motion.h1>
      <SettingsList
      questionCount={questionCount}
      setQuestionCount={setQuestionCount}
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      currDifficulty={currDifficulty}
      setCurrDifficulty={setCurrDifficulty}
      currType={currType}
      setCurrType={setCurrType}
      ></SettingsList>
      <div className={classes.buttonMessagesContainer}>
        <div>
          <ErrorMessageSettings shouldShow={showCountError}>Number of questions should be in range of 10 and 50</ErrorMessageSettings>
          <ErrorMessageSettings shouldShow={showCategoryError}>Category not found</ErrorMessageSettings>
        </div>
        <StartButton
        questionCount={questionCount}
        categoryId={categoryId}
        difficulty={currDifficulty}
        type={currType}
        setCategoryError={setShowCategoryError}
        setCountError={setShowCountError}></StartButton>
      </div>
    </div>
  )
}

export default SettingsPage
