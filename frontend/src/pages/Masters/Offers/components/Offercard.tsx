import { MdOutlineEdit } from "react-icons/md";


function Offercard({ formData, Edit = false }) {
  const { OfferName, CouponCode, Offertype, Discount, Minbill, Maxdiscountcap, description, startDate, EndDate, Appliesto, Promoteon, Active } = formData;
  
  const formatDate = (date: string) => {
    if (!date) return "";
  
    return new Date(`${date}T00:00:00`).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="w-full sm:w-87.5 rounded-xl border border-gray-200 bg-white overflow-hidden">

      <div className="bg-blue-600 text-3xl text-center w-full font-bold text-white py-5">
        {Offertype === "Percent off" ? `${Discount}%` : Offertype === "Flat Off" ? `₹${Discount}` : "B1G1"}
      </div>

      <div className="p-4 flex flex-col gap-2">

        <div className="flex justify-between items-center gap-3">
          <span className="font-medium text-md">
            {OfferName || "Offer Name"}
          </span>
          <span className={`rounded-lg py-0.5 px-3 font-medium text-sm ${Active ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
            {Active ? "Active" : "Not active"}
          </span>
        </div>

        <div className="text-gray-500">
          {description || "No description"}
        </div>

        <div className="flex items-center flex-wrap gap-2 mt-1 mb-2">
          <span className="border-2 border-red-600 px-2 border-dashed text-red-600 rounded-lg text-[12px]">
            {CouponCode || "NO CODE"}
          </span>
          <span className="text-gray-400 text-sm">
            {startDate || EndDate ? `${formatDate(startDate)} - ${formatDate(EndDate)}` : "No dates"}
          </span>
        </div>

        {Minbill > 0 && (
          <div className="text-sm text-gray-500">
            Min. bill: ₹{Minbill}
          </div>
        )}

        {Maxdiscountcap > 0 && (
          <div className="text-sm text-gray-500">
            Max discount: ₹{Maxdiscountcap}
          </div>
        )}

        <div className="text-sm text-gray-500">
          Applies to:{" "}
          <span className="font-medium text-gray-700">
            {Appliesto}
          </span>
        </div>

        {Promoteon?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {Promoteon.map((item: string) => (
              <span key={item} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-md text-xs" >
                {item}
              </span>
            ))}
          </div>
        )}

        {Edit && (
          <button className="flex justify-center items-center border rounded-lg w-full py-2 border-gray-200 text-md gap-1 mt-2">
            <MdOutlineEdit size={20} />
            Edit Offer
          </button>
        )}
      </div>
    </div>
  );
}

export default Offercard;
