import { useState } from 'react';
import Footer from './components/Footer'
import Game from './components/Game'

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
            <div className='question'>
              <h2>Are these <span>numbers</span> calling <span>your</span> name?</h2>
            </div>
          :
            <h1>
              Choose your{' '} 
              <span>lucky</span>
              {' '} numbers.
            </h1>
          }
        </div>
        <div className='game'>
          <Game handleReset={handleReset} />
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
