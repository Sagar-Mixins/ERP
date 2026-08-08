import { IoIosNotificationsOutline } from "react-icons/io";
import { IoStorefrontOutline } from 'react-icons/io5';
import { LuLayoutDashboard } from "react-icons/lu";
import { MdKeyboardArrowDown } from "react-icons/md";
function Navbar() {
  return (
    <nav className='flex flex-col gap-4 bg-white p-4 sm:p-5 border-solid border-b-2 border-gray-200 lg:flex-row lg:items-center lg:justify-between' >

      <div className="flex items-start gap-4 sm:items-center sm:gap-5">
        <LuLayoutDashboard className='h-6 w-6' />
        <div>
          <h2 className="text-lg sm:text-xl font-medium">DashBaoard</h2>
          <span className='block text-sm text-gray-400'> Here's what's happening in your shop today </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 lg:justify-end">
        <button className=' flex items-center gap-2 border-solid border-2 border-gray-200 px-3 py-2 sm:p-3 rounded-3xl font-medium text-sm sm:text-base'>
          <IoStorefrontOutline className='h-5 w-5' />
          <span className="max-w-48 truncate">Grocery & and General</span>
          <MdKeyboardArrowDown className='h-6 w-6' />
        </button>
        <IoIosNotificationsOutline className='h-7 w-7 sm:h-8 sm:w-8' />
        <div className="flex items-center gap-2">
          <div className=" bg-blue-100 rounded-full p-3 text-blue-500 ">RK</div>
          <div>
            <h4 className='text-base sm:text-lg font-medium'>Rahul Kumar</h4>
            <div className='text-xs sm:text-sm'>Owner</div>
          </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
