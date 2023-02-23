import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/:names' element={<App />}/>
        <Route path='/admin'  element={<Admin/>}/>
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
)
