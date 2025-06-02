import React from 'react';
import './style.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Verificando sintaxe
const rootElement = document.getElementById('app')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} 