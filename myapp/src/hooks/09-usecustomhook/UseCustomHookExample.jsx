// OnlineStatus.js
import React from 'react';
import useOnlineStatus from './useOnlineStatus';

function UseCustomHookExample() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h2>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</h2>
    </div>
  );
}

export default UseCustomHookExample;
