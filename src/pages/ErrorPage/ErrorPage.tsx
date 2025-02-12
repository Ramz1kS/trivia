import React, { FC } from 'react'
import classes from './ErrorPage.module.css'

interface ErrorPageProps {
  code: number;
}

const ErrorPage: FC<ErrorPageProps> = ({code}) => {
  const messages: {[index: number]: string} = {
    0: "Everything should be fine?",
    1: "Unfortunately, we couldn't load requested amount of questions in your category",
    2: "Please make sure that you passed all parameters correctly. Are you sure you didn't edit the link?",
    3: "Passed token was not found",
    // Появление этого сообщения я, наверное, должен избегать
    4: "You answered so many questions we simply don't have new ones! Good job!",    
    5: "Too many requests! Please try again in 5 seconds"
  }
  return (
    <div className={classes.pageCanvas}>
      <h1 className={classes.errorText}>Error!</h1>
      <p>Could not load questions from server.</p>
      <p>{messages[code]}</p>
    </div>
  )
}

export default ErrorPage
