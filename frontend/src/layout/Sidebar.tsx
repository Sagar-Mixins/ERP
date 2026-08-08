import React from "react";
import { useState } from "react";
import { PanelLeft } from "lucide-react";


function Sidebar() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className='bg-[#0f172a] text-white'>
      <div className="flex items-center gap-3 px-2 py-5">
        <button onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg hover:bg-white/10">
          <PanelLeft size={20} />
        </button>

        <span className={`text-xl font-bold ${isOpen ? 'block' : 'hidden'} `}> ShopERP</span>


      </div>
    </aside>
  )
}

export default Sidebar
