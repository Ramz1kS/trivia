import React from 'react'
import classes from './ButtonsInputList.module.css'
import ButtonInput from './ButtonInput';

interface ButtonsInputProps {
  settingName: string;
  variants: {[index: string]: string};
  currentSelection: string;
  setFunc: (str: string) => void
}

const ButtonsInputList: React.FC<ButtonsInputProps> = ({settingName, variants, currentSelection, setFunc}) => {
  return (
    <div className={classes.buttonsInputDiv}>
      <h2>{settingName}:</h2>
      <div className={classes.buttonsContainer}>
        {Object.keys(variants).map((item, index) => 
          <ButtonInput
          key={index}
          text={item}
          value={variants[item]}
          currentSelection={currentSelection}
          setFunc={setFunc}></ButtonInput>)}
      </div>
    </div>
  )
}

export default ButtonsInputList
