import React from 'react';

interface NumberProps {
  randomNumbers: number[];
 }
const Numbers: React.FC<NumberProps> = ({randomNumbers}) => {
  return (
    <div data-testid='numbers' className='numbers'>
      {randomNumbers.length > 0 ?
      <>
        <h1 className='bonusBall' data-testid='number-0'>{randomNumbers[0]}</h1>
        <div className='number'>
          <h2 data-testid='number-1'>{randomNumbers[1]}</h2>
          <h2 data-testid='number-2'><span>{randomNumbers[2]}</span></h2>
          <h2 data-testid='number-3'>{randomNumbers[3]}</h2>
          <h2 data-testid='number-4'><span>{randomNumbers[4]}</span></h2>
          <h2 data-testid='number-5'>{randomNumbers[5]}</h2>
          <h2 data-testid='number-6'><span>{randomNumbers[6]}</span></h2>
        </div>
      </>
      :
      <h1> </h1>
      }
      
    </div>
  )
}

export default Numbers