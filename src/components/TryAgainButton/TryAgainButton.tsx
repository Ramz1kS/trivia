import React from 'react'
import classes from './TryAgainButton.module.css'
import { useNavigate } from 'react-router-dom'

const TryAgainButton = () => {
  const navigate = useNavigate()
  const clickHandler = () => {
    navigate("/settings/notfirst")
  }
  return (
    <div>
      <h3 className={classes.button} onClick={clickHandler}>Try again</h3>
    </div>
  )
}

export default TryAgainButton
