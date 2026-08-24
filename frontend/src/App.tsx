import './App.css'
import { Routes, Route, useLocation } from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard'
import Sidebar from './layout/Sidebar'
import Signup from './pages/Authentication/Signup';
import Signin from './pages/Authentication/Signin';
import Settings from './pages/Settings/Settings';
import Accounts from './pages/Masters/Accounts/Accounts';
import Products from './pages/Masters/Products/Products';
import Parties from './pages/Masters/Parties/Parties';
import Employees from './pages/Masters/Employees/Employees';
import Offers from './pages/Masters/Offers/Offers';
import Sales from './pages/Transactions/Sales/Sales';
import Purchase from './pages/Transactions/Purchase/Purchase';
import Update from './pages/Transactions/Update/Update';
import Stock from './pages/Transactions/Stock/Stock';
import Voucher from './pages/Finance/Voucher/Voucher';
import Ledger from './pages/Finance/Ledger/Ledger';
import Report from './pages/Reports/Report/Report';
import GST from './pages/Reports/GST/GST';
import AI from './pages/Reports/AI/AI';
import Navbar from './layout/Navbar';
import Addproduct from "./pages/Masters/Products/components/Addproduct";
import AddOffers from './pages/Masters/Offers/AddOffers';

function App() {

  const location = useLocation();

  const hideSidebar =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === '/masters/products/add' ||
    location.pathname === '/masters/offers/add'

  const hideNavbar =
    location.pathname === '/signup' ||
    location.pathname === 'signin' ||
    location.pathname === '/masters/offers/add'

  return (
    <div className="min-h-screen bg-neutral-100 lg:flex">

      {!hideSidebar && <Sidebar />}



      <main className="min-w-0 flex-1 bg-slate-100">
        {!hideNavbar && <Navbar />}

        {!hideSidebar && (
          <div className="h-16 lg:hidden" />
        )}

        <Routes>

          <Route path="/" element={<Dashboard />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/settings" element={<Settings />} />

          <Route path="/masters/products" element={<Products />} />
          <Route path="/masters/products/add" element={<Addproduct />} />
  
          <Route path="/masters/parties" element={<Parties />} />
          <Route path="/masters/accounts" element={<Accounts />} />
          <Route path="/masters/employees" element={<Employees />} />
          <Route path="/masters/offers" element={<Offers />} />
          <Route path="/masters/offers/add" element={<AddOffers/>} />

          <Route path="/transactions/sales" element={<Sales />} />
          <Route path="/transactions/purchase" element={<Purchase />} />
          <Route path="/transactions/update" element={<Update />} />
          <Route path="/transactions/stock" element={<Stock />} />

          <Route path="/finance/voucher" element={<Voucher />} />
          <Route path="/finance/ledger" element={<Ledger />} />

          <Route path="/reports/report" element={<Report />} />
          <Route path="/reports/gst" element={<GST />} />
          <Route path="/reports/ai" element={<AI />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;