import React, { useState, useMemo } from 'react';

const items = [
  'Apple', 'Banana', 'Orange',
  'Mango', 'Grapes', 'Strawberry'
];

export default function UseMemoExample() {
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0); // Unrelated state

  // useMemo prevents re-filtering unless 'search' changes
  const filteredItems = useMemo(() => {
    console.log('🔍 Filtering...');
    return items.filter(item =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <h2>Fruit Filter (Optimized with useMemo)</h2>
      <input
        placeholder="Search fruits"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredItems.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <button onClick={() => setCounter(c => c + 1)}>
        Re-render Unrelated State: {counter}
      </button>
    </div>
  );
}
