import React from 'react'
import { Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Products() {

  const navigate = useNavigate();


  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search by name or SKU..."
            className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-500 shadow-sm"
          />
        </div>

        {/* Button */}
        <button
          onClick={() => navigate("/masters/products/add")}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700 w-full sm:w-auto"
        >
          <Plus size={20} />
          Add product
        </button>
      </div>

      <div className='mt-4 rounded-2xl border border-gray-200 bg-white shadow-sm'>
        <div className='grid grid-cols-7 border-b border-gray-200 px-5 py-3 text-sm font-medium text-gray-500'>
          <div>Product</div>
          <div>SKU</div>
          <div>Category</div>
          <div>Stock</div>
          <div>Price Channels</div>
          <div>Status</div>
          <div>Edit</div>
        </div>
      </div>




    </div>
  );
}
export default Products
