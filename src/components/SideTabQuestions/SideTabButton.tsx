import React, { FC } from 'react'
import classes from './SideTabButton.module.css'
import { motion } from 'motion/react'

interface SideTabButtonProps {
  onClick: () => void,
  selectedQuestion: number;
  questionVal: number
}

const SideTabButton: FC<SideTabButtonProps> = ({onClick, selectedQuestion, questionVal}) => {
  const clickHandler = (e: React.MouseEvent<HTMLHeadingElement>) => {
    onClick()
  }
  return (
    <motion.h2
    // TODO: Посмотреть возможный фикс позиции просчитывание анимации (сделать, чтобы масштаб кнопки просчитывался НЕ С ЦЕНТРА)
    initial={{scale: 1}}
    whileHover={{scale: 1.1}}
    whileTap={{scale: 0.95}}
    onClick={clickHandler}
    style={{
      fontWeight: selectedQuestion == questionVal ? 600 : 400
    }}>Question {questionVal}</motion.h2>
  )
}

export default SideTabButton
