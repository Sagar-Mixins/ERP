import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from './pages/Dashboard'
import Sidebar from './layout/Sidebar'
import Signup from './pages/Authentication/Signup';
import Signin from './pages/Authentication/Signin';

function App() {

  const location = useLocation();

  const hideSidebar =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <div className="flex">

      {/* Sidebar hide on Signin and Signup */}
      {!hideSidebar && <Sidebar />}

      <main className="flex-1 bg-gray-100 min-h-screen ">

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;