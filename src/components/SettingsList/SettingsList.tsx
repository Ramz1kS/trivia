import React, { useEffect, useState } from 'react'
import classes from './SettingsList.module.css'
import CategoriesInput from '../CategoriesInput/CategoriesInput'
import NumberInput from '../NumberInput/NumberInput'
import ButtonsInput from '../ButtonsInput/ButtonsInputList'
import { motion } from "motion/react"

interface SettingsListProps {
  questionCount: number;
  setQuestionCount: (value: number) => void;
  categoryId: number;
  setCategoryId: (value: number) => void;
  currDifficulty: string;
  setCurrDifficulty: (val: string) => void;
  currType: string;
  setCurrType: (val: string) => void;
}

const SettingsList: React.FC<SettingsListProps> = ({
  questionCount, setQuestionCount,
  categoryId, setCategoryId,
  currDifficulty, setCurrDifficulty,
  currType, setCurrType
}) => {
  // Ключи объекта - названия параметров
  // значения, хранящиеся по ключам - параметры для API
  const difficulties = {
    "easy": "easy",
    "medium": "medium",
    "hard": "hard",
    "any": "any"
  }
  const types = {
    "multiple choice": "multiple",
    "true/false": "boolean",
    "any": "any"
  }
  return (
    <motion.div
    initial={{x: -500, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    transition={{duration: 0.3, delay: 0.2}} 
    className={classes.settings}>
      <NumberInput value={questionCount} setValue={setQuestionCount}></NumberInput>
      <CategoriesInput setCategoryId={setCategoryId}></CategoriesInput>
      <ButtonsInput 
        settingName="Difficulty"
        variants={difficulties}
        currentSelection={currDifficulty}
        setFunc={setCurrDifficulty}
      ></ButtonsInput>
      <ButtonsInput 
        settingName="Type"
        variants={types}
        currentSelection={currType}
        setFunc={setCurrType}
      ></ButtonsInput>
    </motion.div>
  )
}

export default SettingsList
