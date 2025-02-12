import React from 'react'
import { Link } from 'react-router-dom'
import classes from './StartingPage.module.css'
import ButtonStartingPage from '../../components/ButtonStarting/ButtonStartingPage'

const StartingPage = () => {
  return (
    <div className={classes.pageCanvas}>
      <h2>Question 1/1</h2>
      <h1>Are you on a trivia website?</h1>
      <div className={classes.choice}>
          <Link to="/settings/first" className={classes.link}>
            <ButtonStartingPage><h1>Yes</h1></ButtonStartingPage>
          </Link>
        <a href='https://www.youtube.com/watch?v=1oa6VM2GHoA' className={classes.link}>
          <ButtonStartingPage><h1>No</h1></ButtonStartingPage>
        </a>
      </div>
    </div>
  )
}

export default StartingPage
