import React, { FC } from 'react'
import { motion } from 'motion/react'

interface ErrorMessageSettingsProps {
  children: React.ReactNode
  shouldShow: boolean
}

const ErrorMessageSettings: FC<ErrorMessageSettingsProps> = ({children, shouldShow}) => {
  return (
    <motion.h3 
    initial={{opacity: 0}}
    animate={{opacity: shouldShow ? 1 : 0}}
    >{children}</motion.h3>
  )
}

export default ErrorMessageSettings
