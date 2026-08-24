import { MdOutlineEventNote } from 'react-icons/md'
import ToggleSwitch from '../../../../utils/ToggleSwitch'
import { ImSwitch } from 'react-icons/im'

function ValidityandStatus({ formData, setformData }) {

    const handleToggle = (value: boolean) => {
        setformData((prev) => ({
            ...prev,
            Active: value,
        }));
    };

    const handlePromoteToggle = (option: string) => {
        setformData((prev) => {
            const isSelected = prev.Promoteon.includes(option);

            return {
                ...prev,
                Promoteon: isSelected
                    ? prev.Promoteon.filter((item) => item !== option)
                    : [...prev.Promoteon, option],
            };
        });
    };

    const handleDateChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        setformData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
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
                        <input type="date" name="startDate" value={formData.startDate || ""} onChange={handleDateChange} className="border border-gray-300 rounded-lg h-10 w-full p-3 mt-2 outline-none transition focus:border-blue-600" />
                    </div>

                    <div className="w-full">
                        End Date

                        <input type="date" name="EndDate" value={formData.EndDate || ""} onChange={handleDateChange} className="border border-gray-300 rounded-lg h-10 w-full p-3 mt-2 outline-none transition focus:border-blue-600" />
                    </div>
                </div>

                <div>
                    Applies to:
                    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200 mt-2">
                        <button
                            onClick={() => setformData({ ...formData, Appliesto: "All products" })}
                            className={`px-4 py-3 text text-sm ${formData.Appliesto === "All products" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            All products
                        </button>
                        <button
                            onClick={() => setformData({ ...formData, Appliesto: "Category" })}
                            className={`px-4 py-3 text-sm border-x border-gray-200 ${formData.Appliesto === "Category" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            Category
                        </button>
                        <button
                            onClick={() => setformData({ ...formData, Appliesto: "Selected Items" })}
                            className={`px-4 py-3 text-sm ${formData.Appliesto === "Selected Items" ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}>
                            Selected Items
                        </button>
                    </div>
                </div>

                <div>
                    Promote on

                    <div className="flex gap-3 mt-2">
                        <button type="button"
                            onClick={() => handlePromoteToggle('Instore')}
                            className={`py-1 px-3 flex items-center border rounded-lg ${formData.Promoteon.includes('Instore') ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 bg-white'}`} >
                            In-store
                        </button>

                        <button type="button"
                            onClick={() => handlePromoteToggle('Whatsapp')}
                            className={`py-1 px-3 flex items-center border rounded-lg ${formData.Promoteon.includes('Whatsapp') ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 bg-white'}`} >
                            WhatsApp
                        </button>

                        <button type="button"
                            onClick={() => handlePromoteToggle('OnlineStore')}
                            className={`py-1 px-3 flex items-center border rounded-lg ${formData.Promoteon.includes('OnlineStore') ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-200 bg-white'}`} >
                            Online Store
                        </button>
                    </div>
                </div>

                <div className="bg-gray-100 rounded-lg flex items-center justify-between p-3">
                    <div className="flex items-center gap-2">
                        <div className="bg-green-200 p-2 rounded-lg"><ImSwitch size={15} /></div>
                        <div>
                            <div>Active</div>
                            <div>Inactive offers stop applying immediately</div>
                        </div>
                    </div>
                    <ToggleSwitch enabled={formData.Active} setEnabled={handleToggle} />
                </div>
            </div>
        </div>
    )
}

export default ValidityandStatus
