import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStorefrontOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  return (
    <nav className='flex justify-between bg-white p-5 border-solid border-b-2 border-gray-200' >

      <div className="flex items-center gap-5">
        <LuLayoutDashboard className='h-6 w-6' />
        <div>
          <h2 className="text-xl font-medium">DashBaoard</h2>
          <span className='text-gray-400'> Here's what's happening in your shop today </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className=' flex items-center gap-2 border-solid border-2 border-gray-200 p-3 rounded-3xl font-medium'>
          <IoStorefrontOutline className='h-5 w-5'/>
          Grocery & and General
          <MdKeyboardArrowDown className='h-6 w-6'/>
        </button>
        <IoIosNotificationsOutline className='h-8 w-8' />
        <div className="flex gap-2">
          <div className=" bg-blue-100 rounded-full p-3 text-blue-500 ">RK</div>
          <div>
            <h4 className='text-lg font-medium'>Rahul Kumar</h4>
            <div className='text-sm'>Owner</div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
