import React from 'react'

const Numbers: React.FC = () => {
  return (
    <div data-testid='numbers' className='numbers'>
      <h2>1</h2>
      <h2><span>12</span></h2>
      <h2>23</h2>
      <h2><span>34</span></h2>
      <h2>42</h2>
      <h2><span>50</span></h2>
    </div>
  )
}

export default Numbers