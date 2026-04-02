import React, { useEffect, useRef } from 'react';

const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    canvas.width = width;
    canvas.height = height;
    
    // Binary characters
    const binaryChars = ['0', '1'];
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    
    // Drops array
    const drops = [];
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -height;
    }
    
    const draw = () => {
      // Fade effect
      ctx.fillStyle = 'rgba(5, 7, 10, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.font = `${fontSize}px 'Fira Code', 'Courier New', monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        const char = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        
        // Vary opacity based on position
        const opacity = Math.min(0.15 + (drops[i] / height) * 0.5, 0.6);
        ctx.fillStyle = `rgba(10, 255, 157, ${opacity})`;
        
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        drops[i] += 0.3 + Math.random() * 0.5;
      }
      
      requestAnimationFrame(draw);
    };
    
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const newColumns = Math.floor(width / fontSize);
      if (newColumns > drops.length) {
        for (let i = drops.length; i < newColumns; i++) {
          drops[i] = Math.random() * -height;
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    draw();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="binary-rain-container">
      <canvas ref={canvasRef} className="binary-rain-canvas" />
    </div>
  );
};

export default BinaryRain;