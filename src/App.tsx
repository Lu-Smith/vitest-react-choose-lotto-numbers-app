import { useState } from 'react';
import Footer from './components/Footer'
import Game from './components/Game'
import { motion } from "framer-motion"

const App = () => {
  const [reset, setReset] = useState(false);

  const handleReset = () => {
    setReset(prev => !prev);
  }

  return (
    <>
      <div className='App'>
        <div className='header'>
          {reset ?
            <motion.div 
            className='question'
            initial={{y: -100}} 
            animate={{y: 0 }}
            transition={{duration: 1}}
            >
              <h2>Are these <span>numbers</span> calling <span>your</span> name?</h2>
            </motion.div>
          :
            <h1>
              Choose your{' '} 
              <motion.div
                className='lucky'
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                drag="x"
                dragConstraints={{ left: -100, right: 100 }}
              >
                lucky
              </motion.div>
              {' '} numbers.
            </h1>
          }
        </div>
        <div className='game'>
          <Game handleReset={handleReset} />
        </div>
        <motion.div 
          className='footer'
          initial={{y: 100}} 
          animate={{y: 0 }}
          transition={{duration: 1}}
        >
          <Footer />
        </motion.div>
      </div>
    </>
  )
}

export default App
