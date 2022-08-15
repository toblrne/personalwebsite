import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.scss'


import App from './Pages/Homepage/App'
import Projects from './Pages/ProjectsPage/ProjectsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="projects" element={<Projects />} /> 
        </Routes>
    </BrowserRouter>
)
 