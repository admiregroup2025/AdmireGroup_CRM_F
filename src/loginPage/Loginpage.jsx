import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [userName, setUsername] = useState(""); // used as email
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState({ userName: false, password: false });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const company = location.state?.company;

  // 🔑 Handle login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    console.log("📤 Sending login request:", { email: userName, password });

    try {
      const response = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userName, // backend expects email
          password: password,
        }),
      });

      const data = await response.json();
      console.log("📥 API Response:", data);

      if (response.ok) {
        // Save JWT token
        localStorage.setItem("token", data.token);

        alert("✅ Login Successful");
        navigate("/admin/adminDashboard"); // redirect to dashboard
      } else {
        setErrorMsg(data.message || "❌ Login failed");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Focus & Blur for floating labels
  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
  };

  const goBack = () => {
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-500 hover:scale-105">
        
        {/* Company Header if coming from a company card */}
        {company && (
          <div className="text-center mb-6 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <div className="text-4xl mb-2">{company.logo}</div>
            <h2 className="text-xl font-semibold text-gray-800">Login to {company.name}</h2>
            <p className="text-gray-600 text-sm">{company.industry}</p>
          </div>
        )}

        {/* Animated Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-pulse">
            {company ? "Welcome" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Error Message */}
        {errorMsg && (
          <div className="mb-4 text-center text-red-600 font-medium">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => handleFocus("userName")}
              onBlur={() => handleBlur("userName")}
              className="block px-4 py-3 w-full text-gray-800 bg-gray-50 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="userName"
              className={`absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform origin-left ${
                isFocused.userName || userName
                  ? "-translate-y-7 scale-75 text-blue-600"
                  : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
              }`}
            >
              Email
            </label>
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => handleFocus("password")}
              onBlur={() => handleBlur("password")}
              className="block px-4 py-3 w-full text-gray-800 bg-gray-50 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className={`absolute left-4 top-3 text-gray-500 pointer-events-none transition-all duration-300 transform origin-left ${
                isFocused.password || password
                  ? "-translate-y-7 scale-75 text-blue-600"
                  : "peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100"
              }`}
            >
              Password
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:-translate-y-0.5"
            } text-white font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-8">
          <button
            onClick={goBack}
            className="mt-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          >
            ← Back to companies
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse"></div>
      </div>
    </div>
  );
};

export default LoginPage;
