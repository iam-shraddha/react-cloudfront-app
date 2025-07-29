import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
     <h1>Hello from React via CloudFront!</h1>
     <p>This static app is deployed to <strong style="color: #ff6f61;">S3</strong> and served through <strong style="color: #ff6f61f;">CloudFront</strong>.</p>
     <h2>By Shraddha</h2>
    </div>
  );
}

export default App;
