import Offercard from './components/Offercard'
import { IoMdAdd } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

interface Offer {
  discountValue: number | string;
  discountType: "percentage" | "fixed" | "text";
  name: string;
  status: boolean;
  description: string;
  couponcode: string;
  date: Date;
}

function Offers() {

  const navigate = useNavigate()

  const offers: Offer[] = [
    {
      discountValue: 20,
      discountType: "percentage",
      name: "Summer Sale",
      status: true,
      description: "Get 20% off on all products.",
      couponcode: "SUMMER20",
      date: new Date(2044, 7, 5),
    },
    {
      discountValue: 500,
      discountType: "fixed",
      name: "Flat Discount",
      status: true,
      description: "Get ₹500 off on your order.",
      couponcode: "WELCOME15",
      date: new Date(2055, 7, 5),
    },
    {
      discountValue: "BIG",
      discountType: "text",
      name: "Weekend Offer",
      status: false,
      description: "Huge discounts available.",
      couponcode: "WEEKEND10",
      date: new Date(2001, 8, 2),
    },
  ];

  return (
    <div className="p-5">
      <div className="flex items-center justify-between text-gray-500 text-md pb-5">
        <span>Discounts & promotions running in your shop</span>

        <button
        onClick={() => navigate("/masters/offers/add")}
         className="bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center gap-1">
          <IoMdAdd />
          Add Offer
        </button>
      </div>

      <div className="flex flex-wrap gap-5">
        {offers.map((offer) => (
          <Offercard formData={offer} />
        ))}
      </div>
    </div>
  );
}

export default Offers;