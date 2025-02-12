import React, { FC } from 'react'
import classes from './NumberInput.module.css'

interface NumberInputProps {
  value: number;
  setValue: (num: number) => void
}

const NumberInput: FC<NumberInputProps> = ({value, setValue}) => {
  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value))
  }
  return (
    <div className={classes.textInputDiv}>
      <h2 className={classes.settingName}>Number of questions:</h2>
      <input required type='number' size={2} onChange={changeHandle} min="1" max="50" value={value} className={classes.textInput}></input>
    </div>
  )
}

export default NumberInput
