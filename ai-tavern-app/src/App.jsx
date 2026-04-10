import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#0e0e0e', color: 'white', minHeight: '100vh', padding: '20px' }}>
        <h1>AI Tavern Preview Links</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
           <a href="/home.html" target="_blank" style={{ color: '#ffbf00' }}>1. Home / Tavern Hall (home.html)</a>
           <a href="/profile.html" target="_blank" style={{ color: '#ffbf00' }}>2. Character Profile (profile.html)</a>
           <a href="/chat.html" target="_blank" style={{ color: '#ffbf00' }}>3. Chat with Su Wan (chat.html)</a>
        </div>
        <p style={{marginTop: '40px', color: '#adaaaa'}}>
          Note: Since the generated UI is pure HTML/CSS via Stitch,
          they have been saved to the 'public' folder and are accessible directly above for preview.
          To convert them into fully functional React components, you would extract their DOM structure and CSS variables into React code.
        </p>
      </div>
    </BrowserRouter>
  )
}

export default App
