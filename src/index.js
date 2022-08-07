import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.scss'


import App from './App'
import Temp from './components/Temp/Temp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="temp" element={<Temp />} /> 
        </Routes>
    </BrowserRouter>
)
 