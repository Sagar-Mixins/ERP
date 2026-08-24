import { useEffect, useState } from "react";
import type { IconType } from "react-icons";
import { LuChevronDown, LuChevronRight, LuLayoutDashboard, LuMenu, LuPanelLeftClose, LuShoppingBag, LuX } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import { SiGoogleforms } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

type MenuGroup = {
  label: string;
  icon: IconType;
  items: {
    label: string;
    to: string;
  }[];
};

const menuGroups: MenuGroup[] = [
  {
    label: "Masters",
    icon: SiGoogleforms,
    items: [{ label: "Products", to: "/masters/products" }, { label: "Parties", to: "/masters/parties" }, { label: "Accounts", to: "/masters/accounts" }, { label: "Employees", to: "/masters/employees" }, { label: "Offers", to: "/masters/offers" },]
  },
  {
    label: "Transactions",
    icon: GrTransaction,
    items: [{ label: "Sales", to: "/transactions/sales" }, { label: "Purchase", to: "/transactions/purchase" }, { label: "Update", to: "/transactions/update" }, { label: "Stock", to: "/transactions/stock" },]
  },

  {
    label: "Finance",
    icon: FaMoneyCheck,
    items: [{ label: "Voucher", to: "/finance/voucher" }, { label: "Ledger", to: "/finance/ledger" },]
  },

  {
    label: "Reports", icon: TbReportSearch,
    items: [{ label: "Reports", to: "/reports/report" }, { label: "GST", to: "/reports/gst" }, { label: "AI Insights", to: "/reports/ai" },]
  },
];

const itemClass =
  "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

function Sidebar() {
  const { pathname } = useLocation();

  const [isExpanded, setIsExpanded] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    menuGroups.find((group) =>
      group.items.some((item) => pathname === item.to)
    )?.label ?? null
  );

  const toggleGroup = (label: string) => {
    if (!isExpanded) {
      setIsExpanded(true);
    }

    setOpenGroup((current) =>
      current === label ? null : label
    );
  };

  // Close mobile drawer whenever route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scrolling while drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>

      <div className="fixed inset-x-0 top-0 z-40 flex h-16 items-center border-b  bg-slate-950 px-4 shadow-sm lg:hidden">

        <button type="button" onClick={() => setMobileOpen(true)} aria-label="Open menu" className="grid size-10 place-items-center rounded-xl text-slate-700 transition hover:bg-slate-100">
          <LuMenu size={24} />
        </button>

        <div className="ml-3 flex items-center gap-2.5">
          <div className="grid size-9 place-items-center rounded-lg bg-blue-600 text-white shadow-sm">
            <LuShoppingBag size={18} />
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            ShopERP
          </span>
        </div>

      </div>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={` fixed inset-y-0 left-0 z-60  flex flex-col  overflow-hidden bg-slate-950 text-slate-300  shadow-2xl  w-[280px]  transition-transform duration-300 ease-out  ${mobileOpen ? "translate-x-0" : "-translate-x-full"} lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 lg:shadow-xl  ${isExpanded ? "lg:w-64" : "lg:w-fit"}`}>

        <div className="flex h-16 shrink-0 items-center border-b border-white/10 px-3">

          <div className="flex min-w-0 flex-1 items-center gap-3">

            {isExpanded && (<>
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/40">
                <LuShoppingBag size={20} aria-hidden="true" />
              </div>

              <span className="truncate text-lg font-bold tracking-tight text-white">
                ShopERP
              </span>
            </>
            )}

          </div>

          <button type="button" onClick={() => setIsExpanded((expanded) => !expanded)} aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"} className="hidden size-10 shrink-0 place-items-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white lg:grid ">
            {isExpanded ? (<LuPanelLeftClose size={20} />) : (<LuMenu size={20} />)}
          </button>

          <button type="button" onClick={() => setMobileOpen(false)} aria-label="Close menu" className="grid size-10 shrink-0 place-items-center rounded-xl text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden">
            <LuX size={22} />
          </button>

        </div>

        <nav aria-label="Main navigation" className="flex-1 overflow-y-auto px-3 py-4">

          <NavLink to="/" end title={!isExpanded ? "Dashboard" : undefined} className={({ isActive }) => `${itemClass} ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
            <LuLayoutDashboard className="size-5 shrink-0" aria-hidden="true" />
            {isExpanded && (<span>Dashboard</span>)}
          </NavLink>

          <div className="my-4 border-t border-white/10" />

          <div className="space-y-1">
            {menuGroups.map((group) => {
              const Icon = group.icon;
              const hasActiveItem = group.items.some(
                (item) => pathname === item.to
              );

              const isOpen = isExpanded && (openGroup === group.label || hasActiveItem);

              return (
                <div key={group.label}>

                  <button type="button" onClick={() => toggleGroup(group.label)} aria-expanded={isOpen} title={!isExpanded ? group.label : undefined} className={`${itemClass}${hasActiveItem ? "text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>

                    <Icon className="size-5 shrink-0" aria-hidden="true" />

                    {isExpanded && (
                      <>
                        <span className="flex-1 text-left">
                          {group.label}
                        </span>
                        {isOpen ? (<LuChevronDown size={17} />) : (<LuChevronRight size={17} />)}
                      </>
                    )}

                  </button>

                  {isOpen && (
                    <div className="ml-5 mt-1 space-y-1 border-l border-white/10 py-1 pl-4">
                      {group.items.map((item) => (
                        <NavLink key={item.to} to={item.to} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm transition-all ${isActive ? "bg-blue-500/15 font-semibold text-blue-300" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="my-4 border-t border-white/10" />

          <NavLink to="/settings" title={!isExpanded ? "Settings" : undefined} className={({ isActive }) => `${itemClass} ${isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-950/20" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}>
            <IoSettingsOutline className="size-5 shrink-0" aria-hidden="true" />
            {isExpanded && (<span>Settings</span>)}
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;