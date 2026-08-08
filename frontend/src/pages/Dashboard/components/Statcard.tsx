import { TbFileInvoice } from "react-icons/tb";
import { FaArrowTrendUp } from "react-icons/fa6";

function Statcard() {
  return (
    <div className="flex gap-5">

          <div className="border-solid border border-gray-200 bg-white rounded-2xl p-3 min-w-80">
            <div className='flex items-center justify-between gap-2 mb-2 text-gray-600'>
              Today's Sales
              <span className='p-2 bg-blue-200 rounded-xl '><TbFileInvoice className='h-5 w-5' /></span>
            </div>
            <div className="text-3xl font-bold">₹42,800</div>
            <div className=" flex items-center text-green-600 font-semibold text-sm "><FaArrowTrendUp className='mr-2' /> 12% vs yesterday</div>
          </div>

          <div className="border-solid border border-gray-200 bg-white rounded-2xl p-3 min-w-80 ">
            <div className='flex items-center justify-between gap-2 mb-2 text-gray-600'>
              Invoices
              <span className='p-2 bg-green-200 rounded-xl '><TbFileInvoice className='h-5 w-5' /></span>
            </div>
            <div className="text-3xl font-bold">128</div>
            <div className=" flex items-center text-gray-600 text-sm "> 98 GST 30 non-GST</div>
          </div>

          <div className="border-solid border border-gray-200 bg-white rounded-2xl p-3 min-w-80 ">
            <div className='flex items-center justify-between gap-2 mb-2
            text-gray-600'>
              Low Stock
              <span className='p-2 bg-yellow-200 rounded-xl '><TbFileInvoice className='h-5 w-5' /></span>
            </div>
            <div className="text-3xl font-bold text-amber-600">2 items</div>
            <div className=" flex items-center text-gray-500 text-sm "> 1 out of stock </div>
          </div>

          <div className="border-solid border border-gray-200 bg-white rounded-2xl p-3 min-w-80 ">
            <div className='flex items-center justify-between gap-2 mb-2 text-gray-600'>
              Loyalty Points
              <span className='p-2 bg-purple-200 rounded-xl '><TbFileInvoice className='h-5 w-5' /></span>
            </div>
            <div className="text-3xl font-bold">1,480</div>
            <div className=" flex items-center text-gray-500 text-sm "> across 3 customers</div>
          </div>

        </div>
  )
}

export default Statcard
