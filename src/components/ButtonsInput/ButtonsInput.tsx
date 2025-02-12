import React from 'react'
import classes from './ButtonsInput.module.css'

interface ButtonsInputProps {
  settingName: string;
  variants: {[index: string]: string};
  currentSelection: string;
  setFunc: (str: string) => void
}

const ButtonsInput: React.FC<ButtonsInputProps> = ({settingName, variants, currentSelection, setFunc}) => {
  return (
    <div className={classes.buttonsInputDiv}>
      <h2>{settingName}:</h2>
      <div className={classes.buttonsContainer}>
        {Object.keys(variants).map((item, index) => 
          <div key={index} 
            className={classes.buttonVariant} 
            onClick={() => setFunc(variants[item])}
            style={{color: currentSelection == variants[item] ? "white" : "black",
                    backgroundColor: currentSelection == variants[item] ? "black" : "#D9D9D9"
            }}>
              <h3>{item}</h3>
          </div>)}
      </div>
    </div>
  )
}

export default ButtonsInput
