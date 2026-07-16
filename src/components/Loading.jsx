import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30); // Ajuste a velocidade aqui (menor = mais rápido)

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <h1 className="loading-name">
          <span className="loading-name-first">Caio Ferreira</span>
        </h1>
        <div className="loading-bar-wrapper">
          <div className="loading-bar">
            <div 
              className="loading-progress" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="loading-percentage">{progress}%</span>
        </div>
        <p className="loading-text">Loading experience...</p>
      </div>
    </div>
  );
};

export default Loading;