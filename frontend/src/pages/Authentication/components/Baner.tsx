import {
    ShoppingBag,
    ScanBarcode,
    Gift,
    Layers,
} from "lucide-react";

function Baner() {
    return (
        <>
            {/* Left Section */}
            <section className="relative w-full overflow-hidden bg-linear-to-br from-blue-600 to-blue-700 flex min-h-80 flex-col justify-between px-6 py-10 text-white sm:px-10 lg:w-1/2 lg:min-h-screen lg:px-14 lg:py-12">

                {/* Decorative blobs */}
                <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10" />
                <div className="pointer-events-none absolute bottom-0 right-0 w-md h-md rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

                {/* Dotted pattern bottom-left */}
                <div className="pointer-events-none absolute bottom-8 left-10 grid grid-cols-6 gap-2 opacity-30">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <span key={i} className="w-1 h-1 rounded-full bg-white" />
                    ))}
                </div>

                {/* Logo */}
                <div className="relative z-10 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center backdrop-blur-sm">
                        <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold">ShopERP</span>
                </div>

                {/* Headline + feature list */}
                <div className="relative z-10">
                    <h2 className="max-w-md text-3xl font-extrabold leading-tight mb-5 sm:text-4xl">
                        Run your shop
                        <br />
                        from one screen.
                    </h2>
                    <p className="text-blue-100 text-sm leading-relaxed mb-8 max-w-sm sm:text-base">
                        Billing, inventory, GST invoices, purchases, loyalty and accounts
                        &mdash; built for Indian retail &amp; wholesale.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3 text-sm font-medium text-white">
                            <ScanBarcode className="w-5 h-5 text-blue-100" />
                            Barcode &amp; manual billing
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-white">
                            <Gift className="w-5 h-5 text-blue-100" />
                            Loyalty points &mdash; redeem &amp; earn
                        </li>
                        <li className="flex items-center gap-3 text-sm font-medium text-white">
                            <Layers className="w-5 h-5 text-blue-100" />
                            Live stock &amp; ledgers
                        </li>
                    </ul>
                </div>

                {/* Stats row */}
                <div className="relative z-10 flex flex-wrap items-center gap-6 sm:gap-10">
                    <div>
                        <p className="text-2xl font-bold">12k+</p>
                        <p className="text-blue-100 text-sm">shops billing</p>
                    </div>
                    <div className="w-px h-9 bg-white/25" />
                    <div>
                        <p className="text-2xl font-bold">₹840Cr</p>
                        <p className="text-blue-100 text-sm">processed</p>
                    </div>
                    <div className="w-px h-9 bg-white/25" />
                    <div>
                        <p className="text-2xl font-bold">4.8★</p>
                        <p className="text-blue-100 text-sm">rated</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Baner