import React, { useEffect, useRef } from 'react';
import Machine from '../assets/MachinesSpreadsheet.png'

const Game = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const img = new Image();
      img.src = Machine;

      canvas.width = 644/2;
      canvas.height = 772/2;

      if (ctx) {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        }
      }
    }
    
  }, []);

  return (
    <>
      <canvas role='canvas' ref={canvasRef}></canvas>
    </>
    
  )
}

export default Game