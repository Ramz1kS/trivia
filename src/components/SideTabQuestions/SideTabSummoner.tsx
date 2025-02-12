import React, { FC } from 'react'
import classes from './SideTabSummoner.module.css'

interface SideTabSummonerProps {
  setIsSummoned: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideTabSummoner: FC<SideTabSummonerProps> = ({setIsSummoned}) => {
  return (
    <button className={classes.summoner} onClick={() => setIsSummoned((prev => !prev))}>
      <div className={classes.blackLine}></div>
      <div className={classes.blackLine}></div>
      <div className={classes.blackLine}></div>
    </button>
  )
}

export default SideTabSummoner
