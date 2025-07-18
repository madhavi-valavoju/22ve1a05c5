import React from 'react';
import { useState } from 'react';
import { generateCode}from './Generation';
import { getExpiryTime } from './Generation';

export default function Input({ addUrl }) {
  const [inputUrl, setInputUrl] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [validity, setValidity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputUrl) return;

    const code = customUrl || generateCode();
    const expiry = getExpiryTime(validity ? parseInt(validity) : 30);

    const shortUrl = `https://shortendUrlForGivenLongUrl/${code}`;
    addUrl({ inputUrl, shortUrl, expiry });
    
    // Clear fields
    setInputUrl('');
    setCustomUrl('');
    setValidity('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-2">
      <input
        className="border p-2 w-full"
        placeholder="Enter long URL"
        value={inputUrl}
        onChange={(e) => setInputUrl(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Custom short code (optional)"
        value={customUrl}
        onChange={(e) => setCustomUrl(e.target.value)}
      />
      <input
        className="border p-2 w-full"
        placeholder="Validity in minutes (optional, default 30)"
        type="number"
        value={validity}
        onChange={(e) => setValidity(e.target.value)}
      />
      
      <button className="submit">Shorten</button>
      
    </form>
  );
}
