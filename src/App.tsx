import { useEffect, useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router'
import Layout from './components/Layout'
import HomePage from './components/HomePage';
import "./i18n.ts"

function App() {

  useEffect(() => {

  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<h2>About Us</h2>} />
            <Route path="/products" element={<h2>Our Products</h2>} />
            <Route path="/contact" element={<h2>Contact Us</h2>} />
            <Route path="/find-us" element={<h2>Find Us</h2>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
