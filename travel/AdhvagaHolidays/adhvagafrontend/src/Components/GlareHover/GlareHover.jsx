import React, { useRef, useState, useCallback } from 'react';
import './GlareHover.css';

const GlareHover = ({
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.3,
  glareAngle = -30,
  glareSize = 300,
  transitionDuration = 800,
  playOnce = false,
  className = '',
  style = {},
}) => {
  const containerRef = useRef(null);
  const [glarePosition, setGlarePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (playOnce && hasPlayed) return;

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setGlarePosition({ x, y });
  }, [playOnce, hasPlayed]);

  const handleMouseEnter = useCallback(() => {
    if (playOnce && hasPlayed) return;
    setIsHovering(true);
  }, [playOnce, hasPlayed]);

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    setGlarePosition({ x: -100, y: -100 });
    if (playOnce) {
      setHasPlayed(true);
    }
  }, [playOnce]);

  const glareStyle = {
    '--glare-x': `${glarePosition.x}px`,
    '--glare-y': `${glarePosition.y}px`,
    '--glare-color': glareColor,
    '--glare-opacity': isHovering ? glareOpacity : 0,
    '--glare-size': `${glareSize}px`,
    '--glare-angle': `${glareAngle}deg`,
    '--transition-duration': `${transitionDuration}ms`,
  };

  return (
    <div
      ref={containerRef}
      className={`glare-hover-container ${className}`}
      style={{ ...glareStyle, ...style }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div className="glare-effect" />
    </div>
  );
};

export default GlareHover;
