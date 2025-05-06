import React, { useState, useEffect } from 'react';

function UseEffectExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    setLoading(true)
    
    // Fetch data from an API
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);  // Set the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        setError(error);  // Set error if there is an issue with fetching data
        setLoading(false); // Set loading to false
      });
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data && data.map((item) => ( // Display first 5 posts
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectExample;
