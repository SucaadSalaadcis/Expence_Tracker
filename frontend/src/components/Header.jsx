import React from 'react'
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import { MdDashboard, MdLogout } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { FaMoneyBillWave } from 'react-icons/fa'

export default function Header({ toggleSidebar }) {
  return (
    // Top bar for mobile
    <header className="flex items-center justify-between p-4 bg-white shadow md:hidden">
      <button className="text-xl text-black" onClick={toggleSidebar}>
        ☰
      </button>
      <span className="text-lg font-bold text-[#155DFC]">Expense Tracker</span>
    </header>
  )
}
