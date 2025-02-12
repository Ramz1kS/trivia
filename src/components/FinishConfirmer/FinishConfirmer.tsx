import React, { FC } from 'react'
import classes from './FinishConfirmer.module.css'
import { useNavigate } from 'react-router-dom'

interface FinishConfirmerProps {
  rightCount: number;
  totalCount: number;
  setIsNeeded: (val: boolean) => void
}

const FinishConfirmer: FC<FinishConfirmerProps> = ({rightCount, totalCount, setIsNeeded}) => {
  const remove = () => setIsNeeded(false) 
  const navigate = useNavigate()
  return (
    <div className={classes.container}>
      <div className={classes.darkBackground} onClick={remove}></div>
      <div className={classes.centerer}>
        <div className={classes.window}>
          <h2>Are you sure you want to finish this quiz?</h2>
          <div className={classes.choice}>
            <h3 onClick={() => navigate(`/results/${rightCount}/${totalCount}`)}>Yes</h3>
            <h3 onClick={remove}>No</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FinishConfirmer
