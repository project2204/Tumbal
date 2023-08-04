import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
// import Dashboard from './components/Dashboard'
import FormTambah from './components/FormTambah'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <FormTambah/>
  </React.StrictMode>,
)
