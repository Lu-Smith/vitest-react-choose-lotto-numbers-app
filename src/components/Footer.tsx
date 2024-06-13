import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer role="footer">
      <h4>Coded by{' '} 
        <a href="https://www.lunasmithart.com/" target='_blank' className='LunaSmith'>Luna Smith</a>
        , open-source on{' '}  
        <a href="https://github.com/Lu-Smith/vitest-react-choose-lotto-numbers-app" target='_blank' className='GitHub'>GitHub</a>
        .
      </h4>
    </footer>
  )
}

export default Footer