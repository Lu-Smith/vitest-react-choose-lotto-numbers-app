import React from 'react';

interface NumberProps {
  randomNumbers: number[];
 }
const Numbers: React.FC<NumberProps> = ({randomNumbers}) => {
  return (
    <div data-testid='numbers' className='numbers'>
      {randomNumbers.length > 0 ?
      <>
        <h1 className='bonusBall'>{randomNumbers[0]}</h1>
        <div className='number'>
          <h2>{randomNumbers[1]}</h2>
          <h2><span>{randomNumbers[2]}</span></h2>
          <h2>{randomNumbers[3]}</h2>
          <h2><span>{randomNumbers[4]}</span></h2>
          <h2>{randomNumbers[5]}</h2>
          <h2><span>{randomNumbers[6]}</span></h2>
        </div>
      </>
      :
      <h1> </h1>
      }
      
    </div>
  )
}

export default Numbers