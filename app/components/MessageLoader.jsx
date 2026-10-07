'use client';

import { useState } from 'react';

export default function MessageLoader() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    setLoading(true);
    setError('');
    setMessage('');
    try {
      const response = await fetch('/api/message');
      if (!response.ok) {
        throw new Error('Request failed with status ' + response.status);
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError('Could not load the message: ' + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        Load server message
      </button>
      {loading && <p>Loading...</p>}
      {message && <p>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}