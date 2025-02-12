import React, { FC } from 'react'
import classes from './ButtonStartingPage.module.css'

interface ButtonStartingPageProps {
  children: React.ReactNode
}

const ButtonStartingPage: FC<ButtonStartingPageProps> = ({children}) => {
  return (
    <div className={classes.button}>
      <div className={classes.upperSide}>
        {children}
      </div>
      <div className={classes.lowerSide}></div>
    </div>
  )
}

export default ButtonStartingPage
