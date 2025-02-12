import React, { FC, useEffect, useState } from 'react'
import classes from './SettingsPage.module.css'
import SettingsList from '../../components/SettingsList/SettingsList'
import { useParams } from 'react-router-dom'
import StartButton from '../../components/StartButton/StartButton'


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
      <h1 className={classes.pleaseConfigure}>{isFirstVisit ? "Great! In that case please customize your question pool" : "Please customize your question pool"}</h1>
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
          <h3 style={{display: showCountError ? "block" : "none"}}>Number of questions should be in range of 10 and 50</h3>
          <h3 style={{display: showCategoryError ? "block" : "none"}}>Category not found</h3>
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
