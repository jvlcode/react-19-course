import React, { useRef } from 'react';

const UseRefExample = () => {
  // Create a reference for the input element
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus the input using useRef</h1>
      <input ref={inputRef} type="text" placeholder="Click button to focus me!" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
};

export default UseRefExample;
