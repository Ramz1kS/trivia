import React from 'react'
import classes from './LoadingPage.module.css'

const LoadingPage = () => {
  return (
    <div className={classes.pageCanvas}>
      <h1 className={classes.loadingText}>Loading</h1>
      <p>Please wait...</p>
    </div>
  )
}

export default LoadingPage
