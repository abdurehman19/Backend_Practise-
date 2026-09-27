import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Createpost from './pages/Createpost'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Createpost/>} />
        <Route path="/about" element={<h1>About Page</h1>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App