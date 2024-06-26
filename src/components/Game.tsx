import React, { useEffect, useRef, useState } from 'react';
import Machine from '../assets/MachinesSpreadsheet.png';
import Numbers from './Numbers';

interface ResetProps {
  handleReset: () => void;
}

const Game: React.FC<ResetProps> = ({handleReset}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [play, setPlay] = useState(false);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  useEffect(() => {
    const canvas = canvasRef.current;

    const generateRandomNumbers = () => {
      const numbers: number[] = [];

      while (numbers.length < 7) {
        const newNumber = getRandomNumber(1, 59);
        if (!numbers.includes(newNumber)) {
          numbers.push(newNumber);
        }
      }
      setRandomNumbers(numbers);
    };

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = Machine;

      canvas.width = 644/2;
      canvas.height = 772/2;

      const spriteWidth = 644;
      const spriteHeight = 772;

      let animationFrame: number | null = null;
      let frameX = 0;
      const frameRate = 150;

      if(!play) ctx?.drawImage(img, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, canvas.width, canvas.height);

      const drawFrame = () => {
        if (ctx) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, canvas.width, canvas.height);
        }
      };

      img.onload = () => {
        drawFrame(); 
      };

      const animate = () => {
        drawFrame();
        frameX++;
        if (frameX > 6) {
          frameX = 0;
          setPlay(false);
          handleReset();
          cancelAnimationFrame(animationFrame!);
          generateRandomNumbers();

        } else {
          setTimeout(() => {
            animationFrame = requestAnimationFrame(animate);
          }, frameRate);
        }
      };

      if (play) {
        animate();
      }

      return () => {
        cancelAnimationFrame(animationFrame!);
      };
    }
    
  }, [play, handleReset]);

  return (
    <div className='machineContainer'>
      <canvas role='canvas' ref={canvasRef}></canvas>
      {play ? '' : 
      <div>
        <button onClick={() => setPlay(true)}>Play</button>
        <Numbers randomNumbers={randomNumbers} />
      </div>
      }
    </div>
    
  )
}

export default Game