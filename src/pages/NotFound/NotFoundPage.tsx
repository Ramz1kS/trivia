import React from 'react'
import classes from './NotFoundPage.module.css'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className={classes.center}>
      <h2>ts (this) page isnt found ong you boutta pmo frfr</h2>
      <div>
        <Link to="/settings/ithinkaboutdyingmyhairred">Go back to start page</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
