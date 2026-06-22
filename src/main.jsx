import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'
axios.defaults.baseURL="https://69ebc17297482ad5c5280bca.mockapi.io/api"
createRoot(document.getElementById('root')).render(

  <StrictMode>
    <App />
  </StrictMode>,
)
