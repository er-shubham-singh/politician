import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Vision from './pages/Vision'
import News from './News'
import Navbar from './components/NAvbar'
import Gallery from './Gallery'
import Footer from './components/Footer'
import ContactForm from './pages/ContactForm'
import AdminLogin from './components/AdminLogin'
import CreateNews from './components/CreateNews'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
<BrowserRouter >
<Navbar />
    <Routes>
        <Route path="/" element={<Home /> } />
        <Route path = "/about" element={<About /> } />
        <Route path = "vision" element={<Vision /> } />
        <Route path = "gallery" element = {<Gallery /> } />
        <Route path = "/news" element = {<News />} />
        <Route path = "/contact" element = {<ContactForm /> } />
            <Route path="/admin/login" element={<AdminLogin />} />
    <Route path="/admin/news/create" element={<CreateNews />} />
    </Routes>
    <Footer />
</BrowserRouter>
    </>
  )
}

export default App
