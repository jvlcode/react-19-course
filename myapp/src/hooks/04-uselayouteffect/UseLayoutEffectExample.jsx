import React, { useState, useLayoutEffect } from 'react';

function UseLayoutEffectExample() {
  const [color, setColor] = useState('red');

  // This effect will change the background color before the component renders
  useLayoutEffect(() => {
    console.log("2")
    document.body.style.backgroundColor = color;
  }, [color]); // This will run every time the 'color' state changes
  console.log("1")
  return (
    <div>
      <button onClick={() => setColor('lightcoral')}>Change Background Color</button>
    </div>
  );
}

export default UseLayoutEffectExample;
