import React, { useState } from "react";
import { ImagePlus, X, Star } from "lucide-react";
//  Page Compnents 
import ProductFooter from "./ProductFooter";
import Pricing_tax from "./Pricing_tax";
import LivePreview from "./LivePreview";
import Online from "./Online";
//  React components 
import { FaFolder } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { MdCancel } from "react-icons/md";



function Addproduct() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        subcategory: '',
        childCategory: '',
        brand: '',
        description: '',
        tags: '',
        status: 'Active',
        productImages: [],
        //  pricing and Tax
        hasvariants: false,
        size: [],
        colour: [],
        gstPercent: '',
        gstType: '',
        hsnCode: '',
        notGstApplied: false,

        variants: [],
        //online
        isonline: false,
        onlinePrice: '',
        onlineDescription: '',
        features: '',
        fulfilment: 'Delivery'
    });
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
        // alert("Done Sir!")
        console.log("FormData is here sir ", formData);
    };
    const [showImageOptions, setShowImageOptions] = useState(false);
    return (
        <div className="min-h-screen bg-[#f7f9fc] px-4 py-6">
            {/*  Components  */}
            <ProductFooter
                step={step}
                onSaveDraft={handleSaveDraft}
                onBack={step > 1 ? handleBack : undefined}
                onNext={handleNext}
                onPublish={handlePublish} />
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
                                    }`}>
                                {step > 1 ? "✓" : "1"}
                            </span>
                            <span className={`text-sm font-semibold ${step === 1 ? "text-blue-600" : "text-gray-600"}`}> Basics</span></div>
                    </div><div
                        onClick={() => setStep(2)}
                        className={`w-full max-w-[250px] cursor-pointer rounded-xl border px-4 py-3 transition
            ${step === 2 ? "border-blue-600 bg-blue-50" : "border-gray-200 bg-white hover:border-gray-300"}`}>
                        <div className="flex items-center gap-2">
                            <span
                                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${step > 2
                                    ? "bg-green-600 text-white"
                                    : step === 2
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-100 text-gray-500"}`}>
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
                                    }`}>3</span>
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
                                            Basic details</h2>
                                        <p className="text-xs text-gray-400">Name, category and how it's described — shared by every variant
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Form */}
                            <div className="p-5">
                                {/* Product Name */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Product name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        placeholder="e.g. Cotton Polo T-Shirt" value={formData.productName}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                productName: e.target.value
                                            })}
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
                                                })}
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500">
                                            <option>Men</option>
                                            <option>Women</option>
                                            <option>Grocery</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-xs font-medium text-gray-700">Sub-category</label>
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
                                                })}
                                            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500">
                                            <option>Select...</option>
                                            *                                <option>FormalShirt</option>
                                            <option>CasualShirt</option>
                                            <option>ChecksShirt</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Brand */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Brand</label>
                                    <input
                                        type="text"
                                        value={formData.brand}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                brand: e.target.value
                                            })}
                                        placeholder="Start typing a brand..."
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
                                </div>
                                {/* Description */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">
                                        Description <span className="text-red-500">*</span></label>
                                    <textarea
                                        value={formData.description}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                description: e.target.value
                                            })}
                                        rows={4}
                                        placeholder="Describe the product — material, fit, what makes it good..."
                                        className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" />
                                </div>
                                {/* Tags */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">Tags</label>
                                    <input
                                        value={formData.tags}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                tags: e.target.value
                                            })}
                                        type="text"
                                        placeholder="Type & press Enter..."
                                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500" /></div>
                                {/* Product Images */}
                                <div className="mb-5">
                                    <label className="mb-2 block text-xs font-medium text-gray-700">Product images</label>
                                    <div className="flex gap-3">
                                        {/* Primary Image */}
                                        {formData.productImages.map((image: File, index: number) => (
                                            <div
                                                key={index}
                                                className="relative h-20 w-20 overflow-hidden rounded-xl border-2 border-blue-500 bg-gray-50">
                                                {index === 0 && (
                                                    <span className="absolute left-1 top-1 z-10 rounded bg-blue-600 px-1 text-[8px] font-bold text-white">
                                                        PRIMARY
                                                    </span>)}
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`Product ${index + 1}`}
                                                    className="h-full w-full object-cover" />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            productImages: prev.productImages.filter(
                                                                (_: File, i: number) => i !== index
                                                            )
                                                        }));
                                                    }}
                                                    className="absolute right-1 top-1 rounded-full bg-white text-gray-500 hover:text-red-500">
                                                    <X size={14} />
                                                </button>
                                            </div>))}
                                        {/* Add Image */}
                                        <button
                                            type="button"
                                            onClick={() => setShowImageOptions(true)}
                                            className="flex h-20 w-20 flex-col items-center justify-center rounded-xl border border-dashed border-gray-300 text-gray-400 hover:bg-gray-50"
                                        >
                                            <ImagePlus size={20} />
                                            <span className="mt-1 text-xs">Add</span>
                                        </button>
                                    </div>
                                    {showImageOptions && (
                                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                                            <div className="relative w-80 rounded-2xl bg-white p-6 shadow-2xl">
                                                {/* cancel button */}
                                                <button
                                                    type="button"
                                                    onClick={() => setShowImageOptions(false)}
                                                    className="absolute top-3 right-3 text-gray-400 transition-colors hover:text-red-500"><MdCancel size={24} />
                                                </button>
                                                <h3 className="mb-5 text-lg font-semibold text-gray-800">Add product image</h3>
                                                <div className="flex gap-4">
                                                    {/* select image */}
                                                    <label className="group flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-blue-400 hover:bg-blue-50 hover:shadow-md">
                                                        <FaFolder
                                                            size={28}
                                                            className="text-gray-500 transition-colors group-hover:text-blue-500" />
                                                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">Select Image</span>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            multiple
                                                            className="hidden"
                                                            onChange={(e) => {
                                                                const files = Array.from(e.target.files || []);
                                                                if (files.length > 0) {
                                                                    setFormData((prev: any) => ({
                                                                        ...prev,
                                                                        productImages: [
                                                                            ...prev.productImages,
                                                                            ...files
                                                                        ]
                                                                    }));
                                                                    setShowImageOptions(false);
                                                                }
                                                            }} />
                                                    </label>
                                                    {/* camera */}
                                                    <label className="group flex flex-1 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-50 p-5 transition-all hover:border-blue-400 hover:bg-blue-50 hover:shadow-md">
                                                        <FaCamera size={28}
                                                            className="text-gray-500 transition-colors group-hover:text-blue-500" />
                                                        <span className="text-sm font-medium text-gray-600 group-hover:text-blue-600">Camera</span>
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            capture="environment"
                                                            className="hidden" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <p className="mt-2 text-xs text-gray-400">Tap ★ to mark primary · arrows to reorder · × to remove</p>
                                </div>
                                {/* Status */}
                                <div>
                                    <label className="mb-2 block text-xs font-medium text-gray-700">Status</label>
                                    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-200">
                                        <button
                                            onClick={() =>
                                                // console.log("ACTIVE CLICKED");
                                                setFormData({
                                                    ...formData,
                                                    status: "Active"
                                                })}
                                            className={`px-4 py-3 text text-sm ${formData.status === "Active"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}>Active
                                        </button>
                                        <button
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    status: "Draft"
                                                })}
                                            className={`px-4 py-3 text-sm ${formData.status === "Draft"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}>Draft</button>
                                        <button
                                            onClick={() =>
                                                setFormData({
                                                    ...formData,
                                                    status: "Out of Stock"
                                                })}
                                            className={`px-4 py-3 text-sm ${formData.status === "Out of Stock"
                                                ? "bg-blue-600 text-white"
                                                : "bg-white text-gray-700"
                                                }`}>Out of Stock
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* LIVE PREVIEW */}
                        <LivePreview formData={formData} />
                    </div>)}
                {step === 2 && (
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
                        <Pricing_tax
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <LivePreview formData={formData} />
                    </div>)}
                {step === 3 && (
                    <div>
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_300px]">
                            <div> <Online
                                formData={formData}
                                setFormData={setFormData} /> </div>
                            <LivePreview formData={formData} />
                        </div>
                    </div>)}
            </div>
        </div>
    );
}
export default Addproduct;