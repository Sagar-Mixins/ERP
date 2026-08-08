import { useState, type ChangeEvent, type FormEvent } from "react";
import Baner from "./components/Baner";
import { Link } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(true);

    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="min-h-screen bg-[#F7F8FA] flex flex-col lg:flex-row">
            <Baner />
            {/* Rignt Section */}
            <section className="w-full flex items-center overflow-y-auto lg:w-1/2">
                <div className="w-full max-w-140 mx-auto px-6 py-10 sm:px-10 sm:py-12 lg:px-16 lg:py-16">
                    <p className="text-blue-600 text-sm font-bold mb-3 tracking-wide">
                        WELCOME BACK
                    </p>
                    <h1 className="text-3xl sm:text-[32px] font-extrabold text-gray-900 mb-2 tracking-tight">
                        Sign in to ShopERP
                    </h1>
                    <p className="text-sm sm:text-base text-gray-500 mb-9">
                        Access your dashboard, billing and inventory tools.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Email address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email address"
                                    className="w-full pl-11 pr-4 py-3.5 border border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-900 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-400" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    className="w-full pl-11 pr-11 py-3.5 border border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder-gray-400 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((value) => !value)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? (
                                        <EyeOff className="w-4.5 h-4.5" />
                                    ) : (
                                        <Eye className="w-4.5 h-4.5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                />
                                Remember me
                            </label>
                            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-[15px] font-bold py-4 rounded-xl shadow-sm shadow-blue-600/20 transition-colors"
                        >
                            Sign in
                            <ArrowRight className="w-4 h-4" />
                        </button>

                        <div className="flex items-center gap-3 py-1">
                            <div className="flex-1 h-px bg-gray-200" />
                            <span className="text-xs text-gray-400 font-medium">OR</span>
                            <div className="flex-1 h-px bg-gray-200" />
                        </div>

                        <button
                            type="button"
                            className="w-full flex items-center justify-center gap-2.5 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 text-[15px] font-semibold py-4 rounded-xl shadow-sm transition-colors"
                        >
                            <svg className="w-4.5 h-4.5" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z" />
                                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z" />
                                <path fill="#FBBC05" d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29A11.96 11.96 0 000 12c0 1.94.46 3.77 1.29 5.38l3.98-3.09z" />
                                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.94 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z" />
                            </svg>
                            Sign in with Google
                        </button>

                        <p className="text-center text-sm text-gray-500 pt-1">
                            New here?{" "}
                            <Link to="/signup" className="text-blue-600 font-semibold hover:underline">
                                Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Signin;
