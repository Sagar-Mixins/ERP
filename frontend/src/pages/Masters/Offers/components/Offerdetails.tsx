import { BiSolidOffer } from "react-icons/bi";

function Offerdetails({ formData, setformData }) {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData((prev) => ({ ...prev, [name]: value, }));
    };

    return (
        <div className="border border-gray-200 rounded-2xl bg-white">

            <div className="flex items-center gap-3 p-3 border-b border-gray-200">
                <BiSolidOffer size={23} />
                <div>
                    <div className="font-bold">Offer Details</div>
                    <div className="text-gray-500">
                        Name, Code and what the discount does
                    </div>
                </div>
            </div>

            <div className="p-5 flex flex-col gap-3">
                <div>
                    <span>Offer Name</span>
                    <sup className="text-red-600">*</sup>
                    <br />
                    <input type="text" name="OfferName" value={formData.OfferName} onChange={handleChange} className="border border-gray-300 rounded-lg h-10 w-full outline-none transition focus:border-blue-600 p-3 mt-1" placeholder="e.g. Diwali Dhamaka, Flat 20% Off" />
                </div>
                <div>
                    <span>Coupon code</span>
                    <span className="text-gray-400"> (optional)</span>
                    <br />
                    <input type="text" name="CouponCode" value={formData.CouponCode} onChange={handleChange} className="border border-gray-300 rounded-lg h-10 w-full p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="DIWALI20" />
                </div>

                <div>
                    <span> Offer type </span>
                    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200 mt-1">
                        <button type="button" onClick={() => setformData((prev) => ({ ...prev, Offertype: "Percent off" }))} className={`px-4 py-3 text-sm ${formData.Offertype === "Percent off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            % Percent Off
                        </button>
                        <button type="button" onClick={() => setformData((prev) => ({ ...prev, Offertype: "Flat Off" }))} className={`px-4 py-3 text-sm border-x border-gray-200 ${formData.Offertype === "Flat Off" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            Flat off ₹
                        </button>
                        <button type="button" onClick={() => setformData((prev) => ({ ...prev, Offertype: "Buy 1 Get 1" }))} className={`px-4 py-3 text-sm ${formData.Offertype === "Buy 1 Get 1" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            Buy 1 Get 1
                        </button>
                    </div>
                </div>

                <div className="flex gap-5">
                    {
                        formData.Offertype === "Percent off" ?
                            <div>Discount(%)
                                <br />
                                <input type="number" name="Discount" value={formData.Discount} onChange={handleChange} min={0} max={100} className="border border-gray-200 rounded-lg h-10 p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="0" />
                            </div>
                            : formData.Offertype === "Flat Off" ?
                                <div>Flat discount(₹)
                                    <br />
                                    <input type="number" name="Flatoff" value={formData.Flatoff} onChange={handleChange} min={0} max={100} className="border border-gray-200 rounded-lg h-10 p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="0" />
                                </div>
                                :
                                <div>Buy qty <span className="text-gray-400"> (optional) </span>
                                    <br />
                                    <input type="number" name="qty" value={formData.qty} onChange={handleChange} min={0} max={100} className="border border-gray-200 rounded-lg h-10 p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="0" />
                                </div>

                    }
                    <div> Min.bill(₹) <span className="text-gray-400"> (optional) </span>
                        <br />
                        <input type="number" name="Minbill" value={formData.Minbill} onChange={handleChange} min={0} className="border border-gray-200 rounded-lg h-10 p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="0" />
                    </div>
                </div>

                {formData.Offertype === "Percent off" &&
                    <div> <span> Max. discount cap (₹) </span> <span className="text-gray-400"> {" "} (optional) </span>
                        <br />
                        <input type="number" name="Maxdiscountcap" value={formData.Maxdiscountcap} onChange={handleChange} min={0} className="border border-gray-300 rounded-lg h-10 w-full p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="No Cap" />
                    </div>
                }

                <div> <span>Description</span> <span className="text-gray-400"> {" "} (shown to customer) </span>
                    <br />
                    <input type="text" name="description" value={formData.description} onChange={handleChange} className="border border-gray-300 rounded-lg h-10 w-full p-3 mt-1 outline-none transition focus:border-blue-600" placeholder="Short line customer see on the Offer..." />
                </div>

            </div>
        </div>
    );
}

export default Offerdetails;