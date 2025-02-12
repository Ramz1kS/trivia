import React, { FC } from 'react'

interface ButtonQuestionSwitchProps {
  isNext: boolean;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  notActive: boolean;
}

const ButtonQuestionSwitch: FC<ButtonQuestionSwitchProps> = ({isNext, setNumber, notActive}) => {
  const clickHandle = () => {
    if (notActive)
      return
    setNumber((prev) => isNext ? ++prev : --prev)
    console.log("Switching question")
  }
  return (
    <h1 
    style={{
      opacity: notActive ? 0.35 : 1,
      cursor: "pointer"
    }}
    onClick={clickHandle}>
      {isNext ? ">" : "<"}</h1>
  )
}

export default ButtonQuestionSwitch
