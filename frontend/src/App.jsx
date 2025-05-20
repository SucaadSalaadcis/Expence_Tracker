import React, { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

// Components and pages
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Dashbord from './components/Dashboard'
import NotFound from './pages/NotFound'
import Logout from './pages/Auth/Logout'
import ExpenceList from './pages/expences/ExpenceList'

export default function App() {
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)

  // Define routes where layout sidebar & header should be hidden
  const noLayoutRoutes = ['/', '/login', '/register', '/logout']
  const knownRoutes = [
    '/',
    '/login',
    '/register',
    '/dashboard',
    '/expenses',
    '/createEx',
    '/logout'
  ]

  // Hide layout on auth pages and unknown (404) paths
  const hideLayout =
    noLayoutRoutes.includes(location.pathname) ||
    !knownRoutes.includes(location.pathname)

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        {!hideLayout && (
          <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        )}

        {/* Main Content */}
        <div className="flex flex-col flex-1">
          {/* Header */}
          {!hideLayout && <Header toggleSidebar={toggleSidebar} />}

          {/* Page content */}
          <main className="flex-1 p-6 overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashbord />} />
              <Route path="/expenses" element={<ExpenceList />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>

      <Toaster />
    </>
  )
}
