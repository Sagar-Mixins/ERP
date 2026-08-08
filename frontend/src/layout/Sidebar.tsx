import React from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="hidden lg:flex lg:w-72 lg:shrink-0 lg:flex-col lg:border-r lg:border-gray-200 lg:bg-white lg:min-h-screen">
      <div className="border-b border-gray-200 px-6 py-5">
        <div className="text-lg font-bold text-gray-900">Side Bar</div>
        <p className="text-sm text-gray-500">Navigation</p>
      </div>
      <nav className="flex flex-col gap-1 p-4 text-sm font-medium text-gray-700">
        <Link to="/" className="rounded-xl px-4 py-3 hover:bg-gray-100">Dashboard</Link>
        <Link to="#" className="rounded-xl px-4 py-3 hover:bg-gray-100">Overview</Link>
        <Link to="#" className="rounded-xl px-4 py-3 hover:bg-gray-100">Reports</Link>
        <Link to="/Settings" className="rounded-xl px-4 py-3 hover:bg-gray-100">Settings</Link>
      </nav>
    </aside>
  )
}

export default Sidebar
