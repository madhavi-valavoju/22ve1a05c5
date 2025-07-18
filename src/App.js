// src/App.jsx
import React, { useState } from 'react';
import Input from './Input';
import Display from './Display';
import './App.css';

function App() {
  const [urls, setUrls] = useState([]);

  const addUrl = (newUrl) => {
    if (urls.length >= 5) return;
    setUrls([...urls, newUrl]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">URL Shortener</h1>
      <Input addUrl={addUrl} />
      <Display urls={urls} />
    </div>
  );
}

export default App;
