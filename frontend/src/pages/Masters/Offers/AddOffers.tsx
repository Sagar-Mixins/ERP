import { MdOutlineRemoveRedEye } from "react-icons/md";
import Offercard from "./components/Offercard";
import { useState } from "react";
import Offerdetails from "./components/Offerdetails";
import ValidityandStatus from "./components/ValidityandStatus";
import BannerImage from "./components/BannerImage";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function AddOffers() {
  const navigate = useNavigate();

  const [formData, setformData] = useState({
    OfferName: '',
    CouponCode: '',
    Offertype: 'Percent off',
    Discount: 0,
    Flatoff: 0,
    qty: 1,
    Minbill: 0,
    Maxdiscountcap: 0,
    description: '',
    startDate: '',
    EndDate: '',
    Appliesto: 'All products',
    Promoteon: ['Instore'],
    Active: true,
    Bannerimage: false,
    image: '',
  });

  return (
    <div className="min-h-screen bg-slate-100">

      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white p-3">
        <div className="flex items-center gap-3">
          
          <button onClick={() => navigate(-1)} className="border border-gray-200 rounded-lg p-3 cursor-pointer hover:bg-gray-50 shrink-0">
            <FaArrowLeft size={15} />
          </button>
          
          <div>
            <h3 className="text-xl font-bold">
              New Offer
            </h3>
            <span className="text-sm text-gray-500">
              Create a discount or Promotion
            </span>
          </div>

        </div>
      </nav>

      <main className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            
            <div className="w-full lg:flex-1 flex flex-col gap-5 min-w-0">
              <Offerdetails
                formData={formData}
                setformData={setformData}
              />
              <ValidityandStatus
                formData={formData}
                setformData={setformData}
              />
              <BannerImage
                formData={formData}
                setformData={setformData}
              />
            </div>

            <div className="w-full lg:w-96 xl:w-[400px] lg:sticky lg:top-24">
              <div className="flex border rounded-2xl flex-col bg-white border-gray-200 overflow-hidden">
                <span className="flex items-center gap-2 border-b border-gray-200 p-3 font-medium text-gray-500">
                  <MdOutlineRemoveRedEye size={20} />
                  OFFER CARD
                </span>
                <div className="p-4 sm:p-5 flex justify-center ">
                  <Offercard formData={formData} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 z-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 bg-white border-t border-gray-200">
        
        <div className="text-sm text-gray-500">
          Changes are not saved yet
        </div>

        <div className="flex justify-end gap-2">
          <button onClick={() => navigate(-1)} className="px-4 py-2 border border-gray-200 rounded-lg bg-white cursor-pointer hover:bg-gray-50">
            Cancel
          </button>
          <button onClick={() => console.log(formData)} className="px-4 py-2 border border-gray-200 rounded-lg bg-blue-600 text-white cursor-pointer hover:bg-blue-700" >
            Add Offer
          </button>
        </div>

      </footer>

    </div>
  );
}

export default AddOffers;