import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello from React via CloudFront!</h1>
      <p>This static app is deployed to <strong>S3</strong> and served through <strong>CloudFront</strong>.</p>
    </div>
  );
}

export default App;
