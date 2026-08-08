import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard'
import Sidebar from './layout/Sidebar'
import Signup from './pages/Authentication/Signup';
import Signin from './pages/Authentication/Signin';

function App() {

  const location = useLocation();

  const hideSidebar =
    location.pathname === "/signin" ||
    location.pathname === "/signup";

  return (
    <div className="min-h-screen bg-neutral-100 lg:flex">

      {/* Sidebar hide on Signin and Signup */}
      {!hideSidebar && <Sidebar />}

      <main className="flex-1 min-w-0 bg-neutral-100">

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