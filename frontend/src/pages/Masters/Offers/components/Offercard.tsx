import { MdOutlineEdit } from "react-icons/md";

interface Offer {
  discountValue: number | string;
  discountType: "percentage" | "fixed" | "text";
  name: string;
  status: boolean;
  description: string;
  couponcode: string;
  date: Date;
}

interface OfferCardProps {
  offer: Offer;
  Edit?:boolean;
}

function Offercard({ offer , Edit = true }: OfferCardProps) {

  return (
    <div className="w-full sm:w-[350px] rounded-xl border border-gray-200 bg-white overflow-hidden">

      <div className="bg-blue-600 text-3xl text-center w-full font-bold text-white py-5">
        {offer.discountType === "percentage"
          ? `${offer.discountValue}%`
          : offer.discountType === "fixed"
            ? `₹${offer.discountValue}`
            : offer.discountValue}
      </div>

      <div className="p-4 flex flex-col gap-1">

        <div className="flex justify-between items-center gap-3">
          <span className="font-medium text-md">
            {offer.name}
          </span>

          <span
            className={`rounded-lg py-0.5 px-3 font-medium text-sm ${offer.status
              ? "bg-green-200 text-green-700"
              : "bg-red-200 text-red-700"
              }`}
          >
            {offer.status ? "Active" : "Not active"}
          </span>
        </div>

        <div className="text-gray-500">
          {offer.description}
        </div>

        <div className="flex items-center flex-wrap gap-2 mt-1 mb-3">
          <span className="border-2 border-red-600 px-2 border-dashed text-red-600 rounded-lg text-[12px]">
            {offer.couponcode}
          </span>

          <span className="text-gray-400">
            {offer.date.toLocaleDateString("en-GB").replace(/\//g, "-")}
          </span>
        </div>
        { Edit &&
          <button
            className="flex justify-center items-center border rounded-lg w-full py-2 border-gray-200 text-md gap-1">
            <MdOutlineEdit size={20} />
            Edit Offer
          </button>
        }

      </div>
    </div>
  );
}

export default Offercard;