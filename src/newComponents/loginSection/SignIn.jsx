import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const emailRef = useRef(null);
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};

        if (!email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!password.trim()) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Proceed with login logic or API call
            console.log("Form submitted", { email, password });
            alert("Logged in successfully!");
        } else {
            navigate("/dashboard");
        }
    };

    useEffect(() => {
        if (errors.email && emailRef.current) {
            emailRef.current.focus();
        }
    }, [errors]);

    return (
        <div className="grid h-screen w-full grid-cols-1 bg-white md:grid-cols-2">
            {/* Left Section */}
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#E9F0FB] to-[#F6FBFF] p-6 text-center">
                <img
                    src="https://images.unsplash.com/photo-1646215993316-c98f642303ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBDUk18ZW58MXx8fHwxNzU3ODg5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Office workspace"
                    className="h-[270px] w-full max-w-md rounded-md object-cover transition-transform duration-300 hover:scale-105"
                />
                <h3 className="mt-6 text-lg font-semibold text-[#0F2133] md:text-xl">Welcome To CRM PRO</h3>
                <p className="mt-2 px-2 text-sm text-gray-500 md:px-0 md:text-base">
                    Manage your customer relationships with our powerful, intuitive platform.
                </p>
            </div>

            {/* Right Section */}
            <div className="flex flex-col justify-center px-6 py-12">
                <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
                    <div className="mb-6 flex flex-col items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-xl font-bold text-white">C</div>
                        <p className="text-sm text-gray-600">CRM Pro</p>
                    </div>

                    <div className="mb-6 space-y-1 text-center">
                        <h2 className="text-lg font-semibold text-gray-700">Welcome Back</h2>
                        <p className="text-gray-500">Sign in to your account</p>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        {/* Email Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                ref={emailRef}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className={`w-full rounded-lg border bg-[#FBFDFF] px-4 py-3 text-gray-700 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                                    errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                                required
                                aria-invalid={errors.email ? "true" : "false"}
                                aria-describedby="email-error"
                            />
                            {errors.email && (
                                <p
                                    id="email-error"
                                    className="mt-1 text-sm text-red-600"
                                >
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="mb-1 block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className={`w-full rounded-lg border bg-[#FBFDFF] px-4 py-3 pr-10 text-gray-700 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 ${
                                        errors.password ? "border-red-500" : "border-gray-300"
                                    }`}
                                    required
                                    aria-invalid={errors.password ? "true" : "false"}
                                    aria-describedby="password-error"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {errors.password && (
                                <p
                                    id="password-error"
                                    className="mt-1 text-sm text-red-600"
                                >
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                        >
                            Login
                        </button>
                    </form>

                    {/* Forgot Password Link */}
                    <div className="mt-6 text-center">
                        <Link
                            to="/forgot-password"
                            className="text-sm text-gray-600 transition-colors hover:text-black hover:underline"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
