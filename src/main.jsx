<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Gallery from './Gallery.jsx'
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
>>>>>>> ab5a1519b88bb611c90f2fb56451b0c6002ea95a
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    {/* <App /> */}
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
=======
    <App />
  </StrictMode>,
)
>>>>>>> ab5a1519b88bb611c90f2fb56451b0c6002ea95a
