import React from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Createpost from './pages/Createpost'
import Feed from './pages/Feed'
// import Navbar from './pages/Navbar'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create-post" element={<Createpost/>} />
        {/* <Route path="/" element={<Navbar/>} /> */}
        <Route path="/" element={<Feed/>} />
        <Route path="/contact" element={<h1>Contact Page</h1>} />
      </Routes>
    </Router>
  )
}

export default App

