import React from 'react';
import { motion } from "framer-motion";

interface NumberProps {
  randomNumbers: number[];
 }
const Numbers: React.FC<NumberProps> = ({randomNumbers}) => {
  return (
    <div data-testid='numbers' className='numbers'>
      {randomNumbers.length > 0 ?
      <>
        <motion.h1 
          className='bonusBall' 
          data-testid='number-0'
          initial={{rotate: -90}} 
          animate={{rotate: 0 }}
          transition={{duration: 1}}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 1.1 }}
          drag="x"
          dragConstraints={{ left: -100, right: 100 }}
        >
          {randomNumbers[0]}
          </motion.h1>
        <div className='number'>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-1'>
            {randomNumbers[1]}</motion.h2>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-2'>
            <span>{randomNumbers[2]}</span>
          </motion.h2>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-3'>
            {randomNumbers[3]}</motion.h2>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-4'>
            <span>{randomNumbers[4]}</span>
          </motion.h2>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-5'>
            {randomNumbers[5]}</motion.h2>
          <motion.h2 
          initial={{scale: 1, rotate: -90}} 
          animate={{rotate: 0 }}
          whileHover={{scale: 1.5}}
          transition={{duration: 1}}
          data-testid='number-6'>
            <span>{randomNumbers[6]}</span>
          </motion.h2>
        </div>
      </>
      :
      <h1> </h1>
      }
      
    </div>
  )
}

export default Numbers