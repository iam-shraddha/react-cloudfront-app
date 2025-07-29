import React from 'react';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '40px' }}>
      <h1>Hello from React via CloudFront!</h1>
      <p>This static app is deployed to S3 and served through CloudFront.</p>
    </div>
  );
}

export default App;

