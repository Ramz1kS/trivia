import React from 'react'
import classes from './AvailableCategories.module.css'

interface AvailableCategoriesProps {
  shouldShowCategories: boolean;
  selectableCategories: string[];
  setCategory: (str: string) => void;
}

const AvailableCategories: React.FC<AvailableCategoriesProps> = ({shouldShowCategories, selectableCategories, setCategory}) => {
  return (
    <div
      className={classes.fittingCategories}
      style={{ display: shouldShowCategories ? "block" : "none" }}>
      {selectableCategories.map((item, index) => 
      <div
        key={index}
        className={classes.selectableCategory}
        onMouseDown={() => setCategory(item)}>
          <h3>{item}</h3>
      </div>)}
    </div>
  )
}

export default AvailableCategories
