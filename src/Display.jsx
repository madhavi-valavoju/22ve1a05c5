// src/UrlList.jsx
import React from 'react';

export default function Display({ urls }) {
  return (
    <div className="display">
      <h2>Shortened URLs</h2>
      <ul>
        {urls.map((item, index) => (
          <li key={index} className="mb-2">
            <p><strong>Original:</strong> {item.longUrl}</p>
            <p><strong>Short:</strong> <a href={item.longUrl} target="_blank" className="text-blue-600">{item.shortUrl}</a></p>
            <p><strong>Expires At:</strong> {item.expiry}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}
