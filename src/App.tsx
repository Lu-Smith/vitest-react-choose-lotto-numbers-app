import Footer from './components/Footer'
import Game from './components/Game'

const App = () => {

  return (
    <>
      <div className='App'>
        <h1>
          Choose your{' '} 
          <span>lucky</span>
          {' '} numbers.
        </h1>
        <Game />
        <Footer />
      </div>
    </>
  )
}

export default App
