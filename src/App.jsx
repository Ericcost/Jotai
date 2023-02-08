import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

//pages
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

//components
import Navbar from './components/Navbar/Navbar';

//SCSS
import './App.scss'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App;
