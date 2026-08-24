import React, { useState } from 'react'

function Online({ formData, setFormData }: any) {
    const [isOnline, setIsOnline] = useState(false);
    return (
        <div className='mb-4 rounded-xl border border-gray-200 bg-white '>
            <div className='flex items-center justify-between border-b border-gray-200 px-5 py-4 '>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-900'>Sell Online</span>
                    <span className='text-xs text-gray-400'>List on your storefront with features & rich detail</span>
                </div>
                {/* Toggle */}
                <div
                    onClick={() => setIsOnline(!isOnline)}
                    className={`flex h-6 w-11 cursor-pointer items-center rounded-full p-0.5 transition ${isOnline ? "bg-blue-600" : "bg-gray-200"}`}>
                    <div
                        className={`h-5 w-5 rounded-full bg-white shadow-sm transition ${isOnline ? "translate-x-5" : "translate-x-0"}`} />
                </div>
            </div>
            {isOnline && (
                <div className='px-5 py-4'>
                    <div className='flex flex-col  gap-2 justify-between'>
                        <label> Online price (₹) </label>
                        <input
                            type="number"
                            value={formData.onlinePrice}
                            onChange={(e) =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    onlinePrice: e.target.value
                                }))
                            }
                            placeholder="Default to selling price"
                            className="mb-0 w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='flex flex-col mt-2  gap-2 justify-between'>
                        <label> Online-only description
                            <span className='text-gray-400 mx-0.5'>(shared)</span></label>
                        <input
                            type="text"
                            value={formData.onlineDescription}
                            onChange={(e) =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    onlineDescription: e.target.value
                                }))
                            }
                            placeholder="optional- richer copy for your storefront..."
                            className="mb-0 w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='flex flex-col mt-2 gap-2 justify-between'>
                        <label> Features <span className='text-gray-400 mx-0.5'> — shown on product page (shared)</span> </label>

                        <input
                            type="text"
                            value={formData.features}
                            onChange={(e) =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    features: e.target.value
                                }))
                            }
                            placeholder="e.g.100% cotton,slim fit,bio-wash..."
                            className="mb-0 w-full rounded-lg border border-gray-200 px-3 py-3 text-sm outline-none focus:border-blue-500"
                        />
                    </div>
                    <div className='mt-2'>
                        <label > Fulfilment</label>
                        <div className='flex w-full border border-gray-200 rounded-xl mt-2'>
                            <button onClick={() =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    fulfilment: 'Delivery'
                                }))}
                                className={`px-5 py-2 w-full ${formData.fulfilment === 'Delivery'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700'
                                    }`}>Delivery available
                            </button>
                            <button
                                onClick={() =>
                                    setFormData((prev: any) => ({
                                        ...prev,
                                        fulfilment: 'Pickup'
                                    }))
                                } className={`px-5 py-2 w-full border-l border-gray-200 ${formData.fulfilment === 'Pickup'
                                    ? 'bg-blue-600 text-white'
                                    : 'bg-white text-gray-700'
                                    }`}>Pickup Only</button>
                        </div>
                    </div>
                </div>)}
        </div>
    )
}
export default Online