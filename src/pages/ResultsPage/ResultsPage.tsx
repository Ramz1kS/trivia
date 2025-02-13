import React, { FC, useEffect, useState } from 'react'
import classes from './ResultsPage.module.css'
import { useParams } from 'react-router-dom'
import TryAgainButton from '../../components/TryAgainButton/TryAgainButton'
import laughingEmoji from '../../assets/laughing.png'
import monke from '../../assets/cheater.png'
import { motion } from 'motion/react'

const ResultsPage = () => {
  const {rightCount, totalCount} = useParams() // Потом, возможно, переделать под localStorage? Короче, нужно защитить эти данные
  const [message, setMessage] = useState("")
  const percentage = Number(rightCount) / Number(totalCount) * 100
  useEffect(() => {
    if (percentage > 100)
      setMessage("ok now why in the WORLD would you cheat here bruh. smartass. thats you btw")
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
      <motion.h2
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}>No more questions {":)"}</motion.h2>
      <div className={classes.results}>
        <motion.h1
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.4}}>Right answers: {rightCount}</motion.h1>
        <motion.h1
        initial={{opacity: 0, x: -100}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.8}}>Wrong answers: {Number(totalCount) - Number(rightCount)}</motion.h1>
      </div>
      <motion.h3
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{delay: 1.2}}>{message}</motion.h3>
      { percentage == 0 || percentage > 100 ? 
      <motion.img
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 1, delay: 2}}
      src={percentage == 0 ? laughingEmoji : monke}
      className={classes.laughing}>
      </motion.img> : null }
      <TryAgainButton></TryAgainButton>
    </div>
  )
}

export default ResultsPage
