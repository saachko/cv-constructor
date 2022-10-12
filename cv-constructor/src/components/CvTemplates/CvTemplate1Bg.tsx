import React from 'react';

interface BgColorProps {
  color: string,
}

function CvBackground({ color }: BgColorProps) {
  return (
    <svg width="595" height="200" viewBox="0 0 595 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0H595V172C595 172 551 156 455.5 156C342.5 156 234.5 200 138.75 200C43 200 0 176 0 176V0Z" fill={color} />
    </svg>
  );
}

export default CvBackground;
