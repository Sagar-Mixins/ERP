import React from 'react';
import { useState, useRef, useEffect } from 'react';

function Pricing_tax({ formData, setFormData }: any) {

    const [hasvariants, setHasVariants] = useState(false);
    // Size
    const [showSizeInput, setShowSizeInput] = useState(false);
    const [newSize, setNewSize] = useState("");
    const sizeInputRef = useRef<HTMLInputElement>(null);
    const [sizes, setSizes] = useState<string[]>([
        'S', 'M', 'L', 'XL', 'XXL'])

    const [colours, setColours] = useState<string[]>([
        'Black', 'White', 'Blue', 'Red', 'Green', 'Grey'])
    // Colour
    const [showColourInput, setShowColourInput] = useState(false);
    const [newColour, setNewColour] = useState("");
    const colourInputRef = useRef<HTMLInputElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    type Variant = {
        variantName: string;
        price: string;
        discount: string;
        discountType: "%" | "₹";
        sku: string;
        stock: string;
    };

    const addSelectedToList = () => {
        if (formData.size.length === 0 && formData.colour.length === 0) {
            return;
        }

        const sizeList = formData.size.length > 0 ? formData.size : [""];
        const colourList = formData.colour.length > 0 ? formData.colour : [""];

        const newVariants: Variant[] = [];

        sizeList.forEach((size: string) => {
            colourList.forEach((colour: string) => {
                newVariants.push({
                    variantName: [size, colour].filter(Boolean).join(" / "),
                    price: "",
                    discount: "",
                    discountType: "%",
                    sku: "",
                    stock: ""
                });
            });
        });

        setFormData((prev: any) => ({
            ...prev,
            variants: [
                ...prev.variants,
                ...newVariants
            ]
        }));
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                inputRef.current &&
                !inputRef.current.contains(event.target as Node)) {
                setShowSizeInput(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const addVariant = () => {
        setFormData((prev: any) => ({
            ...prev,
            variants: [
                ...prev.variants,
                {
                    variantName: '',
                    price: '',
                    discount: '',
                    discountType: '%',
                    sku: '',
                    stock: ''
                }
            ]
        }));
    };

    return (
        <div>
            <div className='mb-4 flex items-center justify-between rounded-xl border border-gray-200 bg-white px-5 py-4'>
                <div className='flex flex-col'>
                    <span className='text-sm font-medium text-gray-900'>
                        This product has variants
                    </span>
                    <span className='text-xs text-gray-400'>
                        Different sizes/colours, each with its own price, SKU & online price
                    </span>
                </div>
                <div
                    onClick={() => setHasVariants(!hasvariants)}
                    className={`flex h-6 w-11 cursor-pointer items-center rounded-full p-0.5 transition
                    ${hasvariants ? "bg-blue-600" : "bg-gray-200"}`}
                >
                    <div
                        className={`h-5 w-5 rounded-full bg-white shadow-sm transition
                        ${hasvariants ? "translate-x-5" : "translate-x-0"}`}
                    ></div>
                </div>
            </div>

            {/* Toggle on/off */}
            {hasvariants && (
                <div className='rounded-xl border border-gray-200 bg-white'>
                    <div className='px-5 py-5'>
                        <span className='text-base font-semibold text-gray-900'>
                            Variants & Pricing
                        </span>
                        <p className='text-sm text-gray-400'>
                            Each variant carries its own price, discount & SKU
                        </p>
                    </div>
                    {/* Buttons Size */}
                    <div className='px-5 py-4 '>
                        <span className='text-base font-semibold text-gray-900'>Size</span>
                        <div className='mt-4 flex flex-wrap gap-2'>
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setFormData((prev: any) => ({
                                        ...prev,
                                        size: prev.size.includes(size)
                                            ? prev.size.filter((item: string) => item !== size)
                                            : [...prev.size, size]
                                    }))}
                                    className={`rounded-lg border px-5 py-2.5 text-sm ${formData.size.includes(size)
                                        ? "border-blue-600 bg-blue-600 text-white"
                                        : "border-gray-300 bg-white text-gray-700"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                            {showSizeInput ? (
                                <input
                                    ref={sizeInputRef}
                                    autoFocus
                                    value={newSize}
                                    onChange={(e) => setNewSize(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newSize.trim()) {
                                            setSizes((prev) => [...prev, newSize.trim()]);
                                            setNewSize("");
                                            setShowSizeInput(false);
                                        }
                                    }}
                                    className="w-24 rounded-lg border border-dashed border-blue-500 bg-white px-3 py-2.5 text-sm outline-none"
                                    placeholder="+add" />
                            ) : (
                                <button
                                    onClick={() => setShowSizeInput(true)}
                                    className="w-24 rounded-lg border border-dashed border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-400">+ add
                                </button>
                            )}
                        </div>
                    </div>
                    {/* colours */}
                    <div className="px-5 py-4">
                        <span className="text-base font-semibold text-gray-900">
                            Colour
                        </span>

                        <div className="mt-4 flex flex-wrap gap-2">

                            {colours.map((colour) => (
                                <button
                                    key={colour}
                                    onClick={() => setFormData((prev: any) => ({
                                        ...prev,
                                        colour: prev.colour.includes(colour)
                                            ? prev.colour.filter((item: string) => item !== colour)
                                            : [...prev.colour, colour]

                                    }))}
                                    className={`rounded-lg border px-5 py-2.5 text-sm ${formData.colour.includes(colour)
                                        ? "border-blue-600 bg-blue-600 text-white"
                                        : "border-gray-300 bg-white text-gray-700"
                                        }`}
                                >
                                    {colour}
                                </button>
                            ))}
                            {showColourInput ? (
                                <input
                                    ref={colourInputRef}
                                    autoFocus
                                    value={newColour}
                                    onChange={(e) => setNewColour(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && newColour.trim()) {
                                            setColours((prev) => [
                                                ...prev,
                                                newColour.trim(),
                                            ]);
                                            setNewColour("");
                                            setShowColourInput(false);
                                        }
                                    }}
                                    className="w-24 rounded-lg border border-dashed border-blue-500 bg-white px-3 py-2.5 text-sm outline-none"
                                    placeholder="+add" />
                            ) : (
                                <button
                                    onClick={() => setShowColourInput(true)}
                                    className="w-24 rounded-lg border border-dashed border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-400">+ add
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Add selected / Add a row */}
                    <div className="flex items-center gap-3 px-5 pb-5 pt-2">
                        <button
                            onClick={addSelectedToList}
                            disabled={formData.size.length === 0 && formData.colour.length === 0}
                            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-500 bg-blue-50 px-4 py-3.5 text-sm font-medium text-blue-600 transition hover:bg-blue-100 disabled:cursor-not-allowed disabled:border-gray-200 disabled:bg-white disabled:text-gray-300">
                            <span className="text-lg leading-none">+</span> Add selected to list
                        </button>
                        <button
                            onClick={addVariant}
                            className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="3" width="18" height="18" rx="2" />
                                <line x1="3" y1="9" x2="21" y2="9" />
                                <line x1="3" y1="15" x2="21" y2="15" />
                            </svg>Add a row
                        </button>
                    </div>

                    {/* Variant rows list */}
                    {formData.variants.length > 0 && (
                        <div className="px-5 pb-5">
                            <p className="mb-3 text-xs font-semibold tracking-wide text-gray-400">
                                {formData.variants.length} VARIANT{formData.variants.length > 1 ? "S" : ""}
                            </p>
                            <div className="flex flex-col gap-3">
                                {formData.variants.map((variant: Variant, index: number) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-gray-200 bg-white p-4"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-50 text-purple-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.82Z" />
                                                    <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
                                                </svg>
                                            </div>
                                            <input
                                                type="text"
                                                value={variant.variantName}
                                                onChange={(e) =>
                                                    setFormData((prev: any) => ({
                                                        ...prev,
                                                        variants: prev.variants.map((item: Variant, i: number) =>
                                                            i === index
                                                                ? { ...item, variantName: e.target.value }
                                                                : item
                                                        )
                                                    }))
                                                }
                                                placeholder="Variant name (e.g. M / Black)"
                                                className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                            />
                                            <button
                                                onClick={() => {
                                                    setFormData((prev: any) => ({
                                                        ...prev,
                                                        variants: prev.variants.filter(
                                                            (_: any, i: number) => i !== index
                                                        )
                                                    }));
                                                }}
                                                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-red-500 transition hover:bg-red-50"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="3 6 5 6 21 6" />
                                                    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Price ₹
                                                </label>
                                                <input
                                                    type="number"
                                                    value={variant.price}
                                                    onChange={(e) =>
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            variants: prev.variants.map((item: any, i: number) =>
                                                                i === index
                                                                    ? { ...item, price: e.target.value }
                                                                    : item
                                                            )
                                                        }))
                                                    }
                                                    placeholder="0"
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Discount
                                                </label>
                                                <div className="flex overflow-hidden rounded-lg border border-gray-200 focus-within:border-blue-500">
                                                    <input
                                                        type="number"
                                                        value={variant.discount}
                                                        onChange={(e) =>
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                variants: prev.variants.map((item: Variant, i: number) =>
                                                                    i === index
                                                                        ? { ...item, discount: e.target.value }
                                                                        : item
                                                                )
                                                            }))}
                                                        placeholder="0"
                                                        className="w-full px-3 py-2.5 text-sm outline-none" />
                                                    <button
                                                        onClick={() =>
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                variants: prev.variants.map((item: Variant, i: number) =>
                                                                    i === index
                                                                        ? { ...item, discountType: "%" }
                                                                        : item
                                                                )
                                                            }))
                                                        }
                                                        className={`px-3 text-sm font-medium ${variant.discountType === "%"
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white text-gray-500"
                                                            }`}>%
                                                    </button>
                                                    <button
                                                        onClick={() =>
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                variants: prev.variants.map((item: Variant, i: number) =>
                                                                    i === index
                                                                        ? { ...item, discountType: "₹" }
                                                                        : item
                                                                )
                                                            }))
                                                        }
                                                        className={`px-3 text-sm font-medium ${variant.discountType === "₹"
                                                            ? "bg-blue-600 text-white"
                                                            : "bg-white text-gray-500"
                                                            }`}
                                                    >
                                                        ₹
                                                    </button>
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    SKU
                                                </label>
                                                <input
                                                    type="text"
                                                    value={variant.sku}
                                                    onChange={(e) =>
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            variants: prev.variants.map((item: Variant, i: number) =>
                                                                i === index
                                                                    ? { ...item, sku: e.target.value }
                                                                    : item
                                                            )
                                                        }))
                                                    }
                                                    placeholder="type stock code"
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
                                            </div>
                                            <div>
                                                <label className="mb-2 block text-sm font-medium text-gray-700">
                                                    Opening stock
                                                </label>
                                                <input
                                                    type="number"
                                                    value={variant.stock}
                                                    onChange={(e) =>
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            variants: prev.variants.map((item: Variant, i: number) =>
                                                                i === index
                                                                    ? { ...item, stock: e.target.value }
                                                                    : item
                                                            )
                                                        }))
                                                    }
                                                    placeholder="0"
                                                    className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    {/* Empty state */}
                    {formData.variants.length === 0 && (
                        <div className="mx-5 mb-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-4 py-6 text-center">
                            <p className="text-sm text-gray-400">No variants yet</p>
                            <p className="mt-1 text-xs text-gray-400">
                                Pick sizes & colours then tap{" "}
                                <span className="font-medium text-gray-600">Add selected</span>, or{" "}
                                <span className="font-medium text-gray-600">Add a row</span> for a custom one.
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Tax (GST) */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white">
                <div className="flex items-start justify-between px-5 py-4">
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-50 text-orange-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24L4 3a1 1 0 0 0-1 1l.24 5.59a2 2 0 0 0 .59 1.41l9.58 9.58a2 2 0 0 0 2.83 0l4.35-4.35a2 2 0 0 0 0-2.82Z" />
                                <circle cx="7.5" cy="7.5" r="1.5" fill="currentColor" stroke="none" />
                            </svg>
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-gray-900">Tax (GST)</span>
                            <p className="text-xs text-gray-400">One tax rate for the whole product</p>
                        </div>
                    </div>
                    <button
                        onClick={() =>
                            setFormData((prev: any) => ({
                                ...prev,
                                sameForAllVariants: !prev.sameForAllVariants
                            }))
                        }
                        className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${formData.sameForAllVariants
                            ? "border-amber-200 bg-amber-50 text-amber-600"
                            : "border-gray-200 bg-white text-gray-400"
                            }`}>Same for all variants
                    </button>
                </div>
                <div className="grid grid-cols-1 gap-4 px-5 pb-4 sm:grid-cols-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">GST %</label>
                        <select
                            value={formData.gstPercent}
                            onChange={(e) =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    gstPercent: e.target.value
                                }))}
                            disabled={formData.noGstApplied}
                            className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-300">
                            <option>0%</option>
                            <option>5%</option>
                            <option>12%</option>
                            <option>18%</option>
                            <option>28%</option>
                        </select>
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-900">
                            GST type
                        </label>
                        <div className="flex overflow-hidden rounded-xl border border-gray-200">
                            <button
                                onClick={() => setFormData((prev: any) => ({
                                    ...prev,
                                    gstType: "Inclusive"
                                }))}
                                disabled={formData.noGstApplied}
                                className={`flex-1 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:text-gray-300 ${formData.gstType === "Inclusive"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-blue-600"
                                    }`}>Inclusive
                            </button>
                            <button
                                onClick={() => setFormData((prev: any) => ({
                                    ...prev,
                                    gstType: "Exclusive"
                                }))}
                                disabled={formData.noGstApplied}
                                className={`flex-1 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:text-gray-300 ${formData.gstType === "Exclusive"
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-blue-600"
                                    }`}>Exclusive
                            </button>
                        </div>
                    </div>
                </div>
                <div className="px-5 pb-4">
                    <label className="mb-2 block text-sm font-medium text-gray-900">
                        HSN / SAC code <span className="font-normal text-gray-400">(recommended)</span>
                    </label>
                    <input
                        type="text"
                        value={formData.hsnCode}
                        onChange={(e) =>
                            setFormData((prev: any) => ({
                                ...prev,
                                hsnCode: e.target.value
                            }))
                        }
                        disabled={formData.noGstApplied}
                        placeholder="e.g. 6109"
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500 disabled:bg-gray-50" />
                </div>
                <div className="flex items-center gap-2 border-t border-gray-100 px-5 py-3">
                    <label className="flex w-full cursor-pointer items-center gap-2 rounded-lg border border-dashed border-blue-200 bg-blue-50 px-3 py-2 text-xs text-blue-600">
                        <input
                            type="checkbox"
                            checked={formData.noGstApplied}
                            onChange={(e) =>
                                setFormData((prev: any) => ({
                                    ...prev,
                                    noGstApplied: e.target.checked
                                }))
                            }
                            className="h-4 w-4 accent-blue-600"
                        />
                        <span>No GST applied</span>
                    </label>
                </div>
            </div>

            {/* Opening stock banner */}
            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-gray-200 bg-gray-50/60 px-4 py-3">
                <span className="mt-0.5 shrink-0 text-base leading-none">📦</span>
                <p className="text-xs leading-relaxed text-blue-500">
                    <span className="font-semibold text-gray-900">Set opening stock right here.</span> To change it later, use{" "}
                    <span className="font-semibold text-gray-900">Update SKU & Stock</span> on the product — it edits
                    SKU details or stock quantity without re-opening the full form.
                </p>
            </div>
        </div>
    )
}
export default Pricing_tax;