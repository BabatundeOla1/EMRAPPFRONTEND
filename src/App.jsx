import React from 'react';
import SignUp from './components/SignUp'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashBoard from './components/DashBoard';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path = '/SignUp' element={<SignUp/>} />
          {/* <Route path=" /Login" element={<Login />} /> */}
          <Route path='/DashBoard' element={<DashBoard/>} />
        </Routes>
      </Router>
  )
}

export default App
