import React, { useState } from 'react';

function UseStateExample() {
  // Declare a state variable 'isVisible' to track if the text should be shown or hidden
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle the 'isVisible' state
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>This is the text that gets toggled!</p>}
    </div>
  );
}

export default UseStateExample;
