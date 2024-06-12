import React, { useEffect, useRef, useState } from 'react';
import Machine from '../assets/MachinesSpreadsheet.png';

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;

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

      ctx?.drawImage(img, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, canvas.width, canvas.height);

      const drawFrame = () => {
        if (ctx && img.complete) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 0, canvas.width, canvas.height);
        }
      };
      const animate = () => {
        drawFrame();
        frameX++;
        if (frameX > 6) {
          frameX = 0;
          setPlay(false);
          cancelAnimationFrame(animationFrame!);
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
    
  }, [play]);

  return (
    <>
      <canvas role='canvas' ref={canvasRef}></canvas>
      <button onClick={() => setPlay(true)}>Play</button>
    </>
    
  )
}

export default Game