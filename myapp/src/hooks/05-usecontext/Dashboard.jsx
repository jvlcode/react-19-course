import React, { createContext, useState, useContext } from 'react';

// Create a Context with a default value
const UserContext = createContext(null);

function Dashboard() {
  // Create a simple state for user data
  const [user, setUser] = useState({ name: 'John Doe', email: 'john@example.com' });

  return (
    // Provide the user data to the context
    <UserContext.Provider value={user}>
      <div>
        <h1>Welcome to Simple Context Example</h1>
        <Profile />
        <button onClick={() => setUser({ name: 'Jane Doe', email: 'jane@example.com' })}>
          Change User
        </button>
      </div>
    </UserContext.Provider>
  );
}

function Profile() {
  // Consume the user data from the context
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Profile</h2>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Dashboard;
