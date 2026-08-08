import './App.css'
import Dashboard from './pages/Dashboard'
import Sidebar from './layout/Sidebar'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="flex">
      <Sidebar />
      
      <main className="flex-1 bg-gray-100 min-h-screen p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
