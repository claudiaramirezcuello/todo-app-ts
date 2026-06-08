import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'todomvc-app-css/index.css'
import App from './App.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)
