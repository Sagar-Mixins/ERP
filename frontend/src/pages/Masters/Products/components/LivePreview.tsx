import React from 'react'

function LivePreview({ formData }: { formData: { status: string; }; }) {
    return (
        <div className='h-fit'>
            {/* LIVE PREVIEW */}

            <div className="h-fit rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="border-b border-gray-200 px-4 py-3">
                    <p className="text-xs font-semibold text-gray-500">
                        👁 LIVE PREVIEW
                    </p>
                </div>
                <div className="p-3">
                    <div className="relative flex h-36 items-center justify-center rounded-xl bg-gray-100">
                        <span className="text-4xl text-gray-300">
                            🖼️
                        </span>
                        <span
                            className={`absolute right-2 top-2 rounded-full px-2 py-1 text-[10px] font-semibold ${formData.status === "Active"
                                ? "bg-green-100 text-green-600"
                                : formData.status === "Draft"
                                    ? "bg-gray-100 text-gray-600"
                                    : "bg-red-100 text-red-600"
                                }`}
                        >
                            {formData.status}
                        </span>
                    </div>
                    <div className="mt-3">
                        <p className="text-[10px] font-semibold text-gray-400">
                            MEN
                        </p>
                        <h3 className="text-sm font-semibold text-gray-900">
                            Product name
                        </h3>
                        <p className="mt-1 text-xl font-bold text-gray-900">
                            ₹0
                        </p>
                        <p className="text-xs text-gray-400">
                            ₹ No GST applied
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LivePreview