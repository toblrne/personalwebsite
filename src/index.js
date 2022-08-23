import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './globals.scss'
import store from './redux/store'
import { Provider } from 'react-redux'



import App from './Pages/App'
import Projects from './Pages/ProjectsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    </Provider>
)
