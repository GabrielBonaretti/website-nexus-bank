// React 
import React from 'react'
import ReactDOM from 'react-dom/client'

// App component
import App from './App.jsx'

// Styles
import { GlobalStyle } from './globalStyles.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)
