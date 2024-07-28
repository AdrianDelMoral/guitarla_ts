import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render( //* " ! " Assertion not null / non null assertion operator - te garantizo que no va a ser null le indicamos a ts
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)