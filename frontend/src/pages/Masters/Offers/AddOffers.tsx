import { MdOutlineEventNote, MdOutlineRemoveRedEye } from "react-icons/md";
import Offercard from "./components/Offercard";
import { BiSolidOffer } from "react-icons/bi";
import { useState } from "react";
import { ImSwitch } from "react-icons/im";
import { CiImageOn } from "react-icons/ci";
import ToggleSwitch from "../../../utils/ToggleSwitch";

interface Offer {
  discountValue: number | string;
  discountType: "percentage" | "fixed" | "text";
  name: string;
  status: boolean;
  description: string;
  couponcode: string;
  date: Date;
}
function AddOffers() {

  const [formData, setFormData] = useState({
    OffferName: '',
    CouponCode: '',
    Offertype: 'Percent off',
    Discount: 0,
    Minbill: 0,
    Maxdiscountcap: 0,
    description: '',
    startDate:0,
    EndDate:0,
    Appliesto:'All products',
    Promoteon:['Instore', 'Whatsapp', 'OnlineStore'],
    Active:true,
    Bannerimage : '',
  })

  const offer: Offer =
  {
    discountValue: 20,
    discountType: "percentage",
    name: "Summer Sale",
    status: true,
    description: "Get 20% off on all products.",
    couponcode: "SUMMER20",
    date: new Date(2044, 7, 5),
  }

  return (
    <div className="flex gap-5 p-5 min-w-full">
      <div className="w-full flex flex-col gap-5">
        <div className="border border-gray-200 rounded-2xl bg-white">
          <div className="flex items-center gap-3 p-3 border-b border-gray-200">
            <BiSolidOffer size={23} />
            <div>
              <div className="font-bold">Offer Details</div>
              <div className="text-gray-500">Name, Code and what the discount does</div>
            </div>
          </div>

          <div className="p-5 flex flex-col gap-3">
            <div>
              <span>Offer Name</span><sup className="text-red-600">*</sup>
              <br />
              <input type="text" className="border border-gray-300 rounded-lg h-10 w-full focus:border-blue-600 p-3" placeholder="e.g. Diwali Dhamaka, Flat 20% Off"/>
            </div>

            <div>
              <span>Coupon code</span> <span className="text-gray-400">(optional)</span>
              <br />
              <input type="text" className="border border-gray-300 rounded-lg h-10 w-full p-3" placeholder="DIWALI20"/>
            </div>

            <div>
              <span>Offer type</span>
              <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Percent off" })}
                  className={`px-4 py-3 text text-sm ${formData.Offertype === "Percent off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  % Percent Off
                </button>
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Flat Off" })}
                  className={`px-4 py-3 text-sm border-x border-gray-200 ${formData.Offertype === "Flat Off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  Flat off
                </button>
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Buy 1 Get 1" })}
                  className={`px-4 py-3 text-sm ${formData.Offertype === "Buy 1 Get 1" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  Buy 1 Get 1
                </button>
              </div>
            </div>


            <div className="flex gap-5">
              <div className="">
                Discount(%) <br />
                <input type="number" className="border border-gray-200 rounded-lg h-10 p-3" placeholder="0" />
              </div>
              <div className="">
                Min.bill($) <span className="text-gray-400">(optional)</span> <br />
                <input type="number" className="border border-gray-200 rounded-lg h-10 p-3" placeholder="0" />
              </div>
            </div>

            <div>
              <span>Max. discount cap (₹)</span> <span className="text-gray-400">(optional)</span>
              <br />
              <input type="number" className="border border-gray-300 rounded-lg h-10 w-full p-3" placeholder="No Cap" />
            </div>

            <div>
              <span>Description</span> <span className="text-gray-400">(shown to customer)</span>
              <br />
              <input type="text" className="border border-gray-300 rounded-lg h-10 w-full p-3" placeholder="Short line customer see on the Offer..." />
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-2xl bg-white">
          <div className="flex items-center gap-3 p-3 border-b border-gray-200">
            <MdOutlineEventNote />
            <div>
              <div className="font-bold">Validity & Status</div>
              <div className="text-gray-500">Name, Code and what the discount does</div>
            </div>
          </div>

          <div className="p-3 flex flex-col gap-3">
            <div className="flex gap-3">
              <div className="w-full">
                Start Date
                <input type="date" className="border border-gray-300 rounded-lg h-10 w-full p-3" />
              </div>

              <div className="w-full">
                End Date
                <input type="date" className="border border-gray-300 rounded-lg h-10 w-full p-3" />
              </div>
            </div>

            <div>
              Applies to:
              <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Percent off" })}
                  className={`px-4 py-3 text text-sm ${formData.Offertype === "Percent off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  % Percent Off
                </button>
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Flat Off" })}
                  className={`px-4 py-3 text-sm border-x border-gray-200 ${formData.Offertype === "Flat Off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  Flat off
                </button>
                <button
                  onClick={() => setFormData({ ...formData, Offertype: "Buy 1 Get 1" })}
                  className={`px-4 py-3 text-sm ${formData.Offertype === "Buy 1 Get 1" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                  Buy 1 Get 1
                </button>
              </div>
            </div>

            <div>
              Promote on
              <div className="flex gap-3">
                <button className="py-1 px-3 flex items-center border border-gray-200 rounded-lg" > In-store </button>
                <button className="py-1 px-3 flex items-center border border-gray-200 rounded-lg" > WhatsApp </button>
                <button className="py-1 px-3 flex items-center border border-gray-200 rounded-lg" > Online Store</button>
              </div>
            </div>

            <div className="bg-gray-100 rounded-lg flex items-center justify-between p-3">
              <div className="flex items-center gap-2">
                <div className="bg-green-200 p-2 rounded-lg"><ImSwitch size={15} /></div>
                <div>
                  <div className="">Active</div>
                  <div className="">Inactive offers stop applying immediately</div>
                </div>
              </div>
              <ToggleSwitch/>
            </div>
          </div>
        </div>

          <div className="flex items-center justify-between p-3 bg-white rounded-lg border-gray-200 border p-3">
            <div className="flex items-center gap-2">
              <div className="bg-blue-200 p-2 rounded-lg"><CiImageOn size={20} /></div>
              <div>
                <div className="font-medium">Banner Image</div>
                <div className="text-sm text-gray-300">optional - adds a visual to the offer card</div>
              </div>
            </div>
            <ToggleSwitch/>
          </div>
      
      </div>

      <div className="flex border rounded-2xl flex-col bg-white border-gray-200">
        <span className="flex items-center gap-2 border-b border-gray-200 p-2 font-medium text-gray-500">
          <MdOutlineRemoveRedEye size={20} />
          OFFER CARD
        </span>
        <div className="p-5">
          <Offercard offer={offer} Edit={false} />
        </div>
      </div>
    </div>
  )
}

export default AddOffers
