import { useEffect } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router'
import Layout from './components/Layout'
import HomePage from './components/HomePage';
import "./i18n.ts"
import Product from './components/pages/productPage/Product.tsx';

function App() {

  useEffect(() => {

  }, []);

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/Product" element={<Product />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
