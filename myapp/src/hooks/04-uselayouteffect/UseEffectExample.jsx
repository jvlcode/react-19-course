import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  const [color, setColor] = useState('lightblue');

  // This effect will change the background color after the component renders
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]); // This will run every time the 'color' state changes

  return (
    <div>
      <button onClick={() => setColor('lightgreen')}>Change Background Color</button>
    </div>
  );
}

export default UseEffectExample;
