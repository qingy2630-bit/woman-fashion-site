import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NewUserModal from './components/NewUserModal'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProductListPage from './pages/ProductListPage'
import ProductDetailPage from './pages/ProductDetailPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import UserAccountPage from './pages/UserAccountPage'
import ContactPage from './pages/ContactPage'

function App() {
  const [showNewUserModal, setShowNewUserModal] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 模拟检查是否为新用户
  useEffect(() => {
    const isNewUser = localStorage.getItem('isNewUser') === null
    if (isNewUser) {
      setShowNewUserModal(true)
      localStorage.setItem('isNewUser', 'false')
    }
  }, [])

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/user/*" element={<UserAccountPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      {showNewUserModal && <NewUserModal onClose={() => setShowNewUserModal(false)} />}
    </Router>
  )
}

export default App