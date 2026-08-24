import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStorefrontOutline } from "react-icons/io5";
import { LuLayoutDashboard, LuMenu } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";

interface NavbarProps {
  onMenuClick: () => void;
}

function Navbar({ onMenuClick }: NavbarProps) {

  const location = useLocation();

  const pageName =
    location.pathname === "/" ? "Dashboard" :
    location.pathname === "/settings" ? "Settings" :
    location.pathname === "/masters/products" ? "Products" :
    location.pathname === "/masters/products/add" ? "Add Products" :
    location.pathname === "/masters/parties" ? "Parties" :
    location.pathname === "/masters/accounts" ? "Accounts" :
    location.pathname === "/masters/employees" ? "Employees" :
    location.pathname === "/masters/offers" ? "Offers" :
    location.pathname === "/reports/AI" ? "AI" :
    location.pathname === "/reports/GST" ? "GST" :
    location.pathname === "/reports/report" ? "Report" :
    location.pathname === "/Finance/ledger" ? "ledger" :
    location.pathname === "/Finance/voucher" ? "voucher" :
    location.pathname === "/trasaction/purchase" ? "purchase" :
    location.pathname === "/trasaction/sales" ? "sales" :
    location.pathname === "/trasaction/stock" ? "stock" :
    location.pathname === "/trasaction/update" ? "update" :
    "Dashboard";

  return (
    <nav className="relative z-40 flex justify-between gap-4 bg-white p-4 sm:p-5 border-b border-gray-200 lg:flex-row lg:items-center lg:h-16.5">

      {/* Left */}
      <div className="flex items-start gap-3 sm:items-center sm:gap-5 min-w-0">

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="lg:hidden shrink-0 grid place-items-center h-10 w-10 rounded-lg border border-gray-200 hover:bg-gray-50"
        >
          <LuMenu size={22} />
        </button>

        <LuLayoutDashboard
          size={23}
          className="shrink-0 hidden md:block"
          />

        <div className="min-w-0 hidden md:block">
          <h2 className="text-lg sm:text-xl font-medium truncate">
            {pageName}
          </h2>

          <span className="block text-sm text-gray-400 truncate">
            Here's what's happening in your shop today
          </span>
        </div>

      </div>


      {/* Right */}
      <div className="flex flex-wrap items-center gap-3 lg:justify-end">

        <button className="flex items-center gap-2 border border-gray-200 px-2 py-1 sm:p-2 rounded-xl font-medium text-xs sm:text-sm">
          <IoStorefrontOutline size={15} />

          <span className="max-w-32 sm:max-w-48 truncate">
            Grocery & General
          </span>

          <MdKeyboardArrowDown size={15} />
        </button>

        <IoIosNotificationsOutline className="h-7 w-7 sm:h-8 sm:w-8 shrink-0" />

        <div className="flex items-center gap-2">
          <div className="bg-blue-100 rounded-full p-3 text-blue-500 h-10 w-10 flex items-center justify-center">
            RK
          </div>

          <div className="hidden sm:block">
            <h4 className="text-base font-medium">
              Rahul Kumar
            </h4>

            <div className="text-xs">
              Owner
            </div>
          </div>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;