import React, { useState } from "react";
import { ImagePlus, X, Star } from "lucide-react";
import ProductFooter from "./ProductFooter";


function Addproduct() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        subcategory: '',
        childCategory: '',
        brand: '',
        description: '',
        tags: '',
        status: 'Active'
    })
    const handleSaveDraft = () => {
        console.log(formData.status);

        localStorage.setItem(
            "productDraft",
            JSON.stringify(formData)
        );
        alert("Saved successfully!")
    }
    const handleNext = () => {
        setStep((prev) => prev + 1);
    };
    const handleBack = () => {
        setStep((prev) => prev - 1);
    };
    const handlePublish = () => {
        alert("Done Sir!")
    };


    return (

        <div className="min-h-screen bg-[#f7f9fc] px-4 py-6">
            {/*  Components  */}
            <ProductFooter
                step={step}
                onSaveDraft={handleSaveDraft}
                onBack={step > 1 ? handleBack : undefined}
                onNext={handleNext}
                onPublish={handlePublish}
            />



            <div className="mx-auto max-w-7xl">
                <div className="mb-4 flex gap-2">
                    <div
                        onClick={() => setStep(1)}
                        className={`w-full max-w-[250px] cursor-pointer rounded-xl border px-4 py-3 transition
            ${step === 1 ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                        <div className="flex items-center gap-2">
                            <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step > 1
                                    ? "bg-green-600 text-white"
                                    : "bg-blue-600 text-white"
                                    }`}
                            >
                                {step > 1 ? "✓" : "1"}
                            </span>
                            <span className={`text-sm font-semibold ${step === 1 ? "text-blue-600" : "text-gray-600"}`}> Basics</span>
                        </div>
                    </div>

                    <div
                        onClick={() => setStep(2)}
                        className={`w-full max-w-[250px] cursor-pointer rounded-xl border px-4 py-3 transition
            ${step === 2 ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                        <div className="flex items-center gap-2">
                            <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step > 2
                                    ? "bg-green-600 text-white"
                                    : step === 2
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-500"
                                    }`}
                            >
                                {step > 2 ? "✓" : "2"}
                            </span>
                            <span className={`text-sm font-semibold ${step === 2 ? "text-blue-600" : "text-gray-600"}`}>Pricing & Tax</span>
                        </div>
                    </div>
                    <div
                        onClick={() => setStep(3)}
                        className={`w-full max-w-[250px] cursor-pointer rounded-xl border px-4 py-3 transition
            ${step === 3 ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                        <div className="flex items-center gap-2">
                            <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step === 3
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-100 text-gray-500"
                                    }`}
                            >
                                3
                            </span>
                            <span className={`text-sm font-semibold ${step === 3 ? "text-blue-600" : "text-gray-600"}`}>Online</span>
                        </div>
                    </div>
                </div>
                {step === 1 && (
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
                        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
                            {/* Header */}
                            <div className="border-b border-gray-200 px-5 py-4">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600"> 📦</div>
                                    <div>
                                        <h2 className="text-base font-semibold text-gray-900">
                                            Basic details
                                        </h2>
                                        <p className="text-xs text-gray-400">
                                            Name, category and how it's described — shared by every variant
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Form */}
                            <div className="p-5">
                                {/* Product Name */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Product name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Cotton Polo T-Shirt" value={formData.productName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                productName: e.target.value
                                            })
                                        }
                                        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-blue-500" />
                                </div>
                                {/* Category */}
                                <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-gray-700">
                                            Category <span className="text-red-500">*</span>
                                        </label>
                                        <select value={formData.category}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    category: e.target.value
                                                })
                                            }
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500">
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Grocery</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-gray-700">
                                            Sub-category
                                        </label>
                                        <select value={formData.subcategory}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    subcategory: e.target.value
                                                })}
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500">
                                            <option>Select...</option>
                                            <option>Shirt</option>
                                            <option>T-Shirt</option>
                                            <option>Jeans</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-gray-700">
                                            Child category
                                        </label>
                                        <select value={formData.childCategory}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    childCategory: e.target.value
                                                })
                                            }

                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500">
                                            <option>Select...</option>
                                            <option>FormalShirt</option>
                                            <option>CasualShirt</option>
                                            <option>ChecksShirt</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Brand */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Brand
                                    </label>
                                    <input
                                        type="text"
                                        value={formData.brand}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                brand: e.target.value
                                            })
                                        }
                                        placeholder="Start typing a brand..."
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
                                </div>
                                {/* Description */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                description: e.target.value
                                            })
                                        }
                                        rows={4}
                                        placeholder="Describe the product — material, fit, what makes it good..."
                                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
                                </div>
                                {/* Tags */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Tags
                                    </label>
                                    <input
                                        value={formData.tags}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                tags: e.target.value
                                            })
                                        }
                                        type="text"
                                        placeholder="Type & press Enter..."
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
                                </div>
                                {/* Product Images */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Product images
                                    </label>
                                    <div className="flex gap-3">
                                        {/* Primary Image */}
                                        <div className="relative flex h-20 w-20 items-center justify-center rounded-xl border-2 border-blue-500 bg-gray-50">
                                            <span className="absolute left-1 top-1 rounded bg-blue-600 px-1 text-[8px] font-bold text-white">
                                                PRIMARY
                                            </span>
                                            <ImagePlus size={24} className="text-gray-400" />
                                            <button className="absolute right-1 top-1 text-gray-500 hover:text-red-500">
                                                <X size={14} />
                                            </button>
                                        </div>
                                        {/* Add Image */}
                                        <button className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 text-gray-400 hover:bg-gray-50">
                                            <ImagePlus size={20} />
                                            <span className="mt-1 text-xs">
                                                Add
                                            </span>
                                        </button>
                                    </div>
                                    <p className="mt-2 text-xs text-gray-400">
                                        Tap ★ to mark primary · arrows to reorder · × to remove
                                    </p>
                                </div>
                                {/* Status */}
                                <div>
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Status
                                    </label>
                                    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
                                        <button
                                            onClick={() =>
                                                // console.log("ACTIVE CLICKED");
                                                setFormData({
                                                    ...formData,
                                                    status: "Active"
                                                })
                                            }
                                            className={`px-4 py-3 text text-sm ${formData.status === "Active"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}
                                        >
                                            Active
                                        </button>
                                        <button
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    status: "Draft"
                                                })
                                            }
                                            className={`px-4 py-3 text-sm ${formData.status === "Draft"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}
                                        >
                                            Draft
                                        </button>
                                        <button
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    status: "Out of Stock"
                                                })
                                            }
                                            className={`px-4 py-3 text-sm ${formData.status === "Out of Stock"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}
                                        >
                                            Out of Stock
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                )}
                {step === 2 && (
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Pricing & Tax
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                            Set product pricing, GST and tax information.
                        </p>
                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Selling price
                                </label>
                                <input
                                    type="number"
                                    placeholder="₹ 0"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    Purchase price
                                </label>
                                <input
                                    type="number"
                                    placeholder="₹ 0"
                                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium">
                                    GST
                                </label>
                                <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500">
                                    <option>No GST</option>
                                    <option>5%</option>
                                    <option>12%</option>
                                    <option>18%</option>
                                    <option>28%</option>
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Online
                        </h2>
                        <p className="mt-1 text-sm text-gray-400">
                            Configure your product for online sales.
                        </p>
                        <div className="mt-6">
                            <label className="mb-2 block text-sm font-medium">
                                Online product name
                            </label>
                            <input
                                type="text"
                                placeholder="Product name"
                                className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-blue-500"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Addproduct;