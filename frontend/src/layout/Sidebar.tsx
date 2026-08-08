import { useState } from "react";
import type { IconType } from "react-icons";
import { LuChevronDown, LuChevronRight, LuLayoutDashboard, LuMenu, LuPanelLeftClose, LuShoppingBag, } from "react-icons/lu";
import { NavLink, useLocation } from "react-router-dom";
import { SiGoogleforms } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { GrTransaction } from "react-icons/gr";
import { FaMoneyCheck } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

type MenuGroup = { label: string; icon: IconType; items: { label: string; to: string }[]; };

const menuGroups: MenuGroup[] = [
  {
    label: "Masters",
    icon: SiGoogleforms,
    items: [
      { label: "Products", to: "/masters/products" },
      { label: "Parties", to: "/masters/parties" },
      { label: "Accounts", to: "/masters/accounts" },
      { label: "Employees", to: "/masters/employees" },
      { label: "Offers", to: "/masters/offers" },
    ],
  },
  {
    label: "Transactions",
    icon: GrTransaction,
    items: [
      { label: "Sales", to: "/transactions/sales" },
      { label: "Purchase", to: "/transactions/purchase" },
      { label: "Update", to: "/transactions/update" },
      { label: "Stock", to: "/transactions/stock" },
    ],
  },
  {
    label: "Finance",
    icon: FaMoneyCheck,
    items: [
      { label: "Voucher", to: "/finance/voucher" },
      { label: "Ledger", to: "/finance/ledger" },
    ],
  },
  {
    label: "Reports",
    icon: TbReportSearch,
    items: [
      { label: "Reports", to: "/reports/report" },
      { label: "GST", to: "/reports/gst" },
      { label: "AI Insights", to: "/reports/ai" },
    ],
  },
];

const itemClass ="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400";

function Sidebar() {
  const { pathname } = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);
  const [openGroup, setOpenGroup] = useState<string | null>(() =>
    menuGroups.find((group) => group.items.some((item) => pathname === item.to))?.label ?? null,
  );

  const toggleGroup = (label: string) => {
    if (!isExpanded) setIsExpanded(true);
    setOpenGroup((current) => (current === label ? null : label));
  };

  return (
    <aside
      className={`shrink-0 self-stretch overflow-hidden bg-slate-950 text-slate-300 shadow-xl transition-[width] duration-200 lg:min-h-screen ${isExpanded ? "w-full lg:w-64" : "w-full lg:w-20"}`}>
      <div className="flex h-18 items-center border-b border-white/10 px-3">
        {isExpanded && (
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-950/40">
              <LuShoppingBag size={20} aria-hidden="true" />
            </div>
            {isExpanded && <span className="truncate text-lg font-bold tracking-tight text-white">ShopERP</span>}
          </div>
        )}

        <button type="button" onClick={() => setIsExpanded((expanded) => !expanded)} aria-label={isExpanded ? "Collapse sidebar" : "Expand sidebar"} className="grid size-10 shrink-0 place-items-center rounded-lg text-slate-400 transition-colors hover:bg-white/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
          {isExpanded ? <LuPanelLeftClose size={20} /> : <LuMenu size={20} />}
        </button>
      </div>

      <nav aria-label="Main navigation" className="space-y-1 p-3">
        <NavLink to="/" end title={!isExpanded ? "Dashboard" : undefined} className={({ isActive }) => `${itemClass} ${isActive ? "bg-blue-600 text-white shadow-md shadow-blue-950/30" : "hover:bg-white/8 hover:text-white w-fit"}`} >
          <LuLayoutDashboard className="size-5 shrink-0" aria-hidden="true" />
          {isExpanded && <span>Dashboard</span>}
        </NavLink>

        <div className="my-3 border-t border-white/10" />

        {menuGroups.map((group) => {
          const Icon = group.icon;
          const hasActiveItem = group.items.some((item) => pathname === item.to);
          const isOpen = isExpanded && (openGroup === group.label || hasActiveItem);

          return (
            <div key={group.label}>
              <button type="button" onClick={() => toggleGroup(group.label)} aria-expanded={isOpen} title={!isExpanded ? group.label : undefined} className={`${itemClass} ${hasActiveItem ? "text-white" : "hover:bg-white/8 hover:text-white"}`} >
                <Icon className="size-5 shrink-0" aria-hidden="true" /> {isExpanded && (
                  <>
                    <span className="flex-1 text-left">{group.label}</span>
                    {isOpen ? <LuChevronDown size={17} /> : <LuChevronRight size={17} />}
                  </>
                )}
              </button>

              {isOpen && (
                <div className="mt-1 ml-5 space-y-1 border-l border-white/10 py-1 pl-4">
                  {group.items.map((item) => (
                    <NavLink key={item.to} to={item.to} className={({ isActive }) => `block rounded-lg px-3 py-2 text-sm transition-colors ${isActive ? "bg-blue-500/15 font-semibold text-blue-300" : "hover:bg-white/8 hover:text-white"}`}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          );
        })}

        <div className="my-3 border-t border-white/10" />
        <NavLink to="/settings" title={!isExpanded ? "Settings" : undefined} className={({ isActive }) => `${itemClass} ${isActive ? "bg-blue-600 text-white shadow-md shadow-blue-950/30" : "hover:bg-white/8 hover:text-white"}`}>
          <IoSettingsOutline className="size-5 shrink-0" aria-hidden="true" />
          {isExpanded && <span>Settings</span>}
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
