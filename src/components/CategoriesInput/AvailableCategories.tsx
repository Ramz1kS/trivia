import React from 'react'
import classes from './AvailableCategories.module.css'
import { AnimatePresence, motion } from 'motion/react';

interface AvailableCategoriesProps {
  shouldShowCategories: boolean;
  selectableCategories: string[];
  setCategory: (str: string) => void;
}

const AvailableCategories: React.FC<AvailableCategoriesProps> = ({shouldShowCategories, selectableCategories, setCategory}) => {
  return (
    <AnimatePresence>
      { shouldShowCategories ? 
      <motion.div
      className={classes.fittingCategories}
      initial={{maxHeight: 0}}
      animate={{maxHeight: (selectableCategories.length > 6 ? 6 : selectableCategories.length) * 50, opacity: 1 }}
      exit={{opacity: 0}}
      transition={{ duration: 0.3 }}>
        {selectableCategories.map((item, index) => 
        <div
          key={index}
          className={classes.selectableCategory}
          onMouseDown={() => setCategory(item)}>
            <h3>{item}</h3>
        </div>)}
      </motion.div> 
      : null}
    </AnimatePresence>
  )
}

export default AvailableCategories
