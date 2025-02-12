import React, { FC, useEffect, useState } from 'react'
import classes from './ResultsPage.module.css'
import { useParams } from 'react-router-dom'
import TryAgainButton from '../../components/TryAgainButton/TryAgainButton'

const ResultsPage = () => {
  const {rightCount, totalCount} = useParams() // Потом, возможно, переделать под localStorage? Короче, нужно защитить эти данные
  const [message, setMessage] = useState("")
  useEffect(() => {
    const percentage = Number(rightCount) / Number(totalCount) * 100
    if (percentage > 100)
      setMessage("Hey! You're cheating!!!")
    else if (percentage == 100)
      setMessage("You got them all right! Incredible!")
    else if (percentage >= 75)
      setMessage("You almost got it all of them. Good job!")
    else if (percentage >= 50)
      setMessage("Half-way in, damn you're good.")
    else if (percentage >= 25)
      setMessage("We all started somewhere :D")
    else if (percentage >= 10)
      setMessage("Better luck next time")
    else
      setMessage("What a fucking donkey you are, holy shit")
  }, [])
  return (
    <div className={classes.pageCanvas}>
      <h2>No more questions {":)"}</h2>
      <div className={classes.results}>
        <h1>Right answers: {rightCount}</h1>
        <h1>Wrong answers: {Number(totalCount) - Number(rightCount)}</h1>
      </div>
      <h3>{message}</h3>
      <TryAgainButton></TryAgainButton>
    </div>
  )
}

export default ResultsPage
