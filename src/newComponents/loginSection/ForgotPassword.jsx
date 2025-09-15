
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
const ForgotPassword = () => {
  return (
<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Left Section (hidden on small screens) */}
  <div className="flex flex-1 flex-col items-center justify-center text-center bg-orange-100 p-8">
    <div className="rounded-lg overflow-hidden mb-4">
      <img
        src="/ForgotPassword.jpg"
        alt="Forgot Password"
        className="rounded-lg object-cover w-80 h-80"
      />
    </div>
    <h2 className="text-xl text-black font-semibold">Secure Password Reset</h2>
    <p className="text-gray-600 mt-2">
      We'll help you regain access to your account securely
    </p>
  </div>

  {/* Right Section (Form) */}
  <div className="flex-1 flex items-center justify-center">
    <div className="bg-white rounded-xl p-2 w-full max-w-md">
      <div className="mx-auto flex items-center justify-center mb-8 bg-black text-white w-12 h-12 rounded-lg my-8">C</div>
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-10">CRM Pro</h1>

      

      <form className="space-y-4 shadow-md p-4">
        <div className="text-center mb-8">
        <h2 className="text-xl text-black font-semibold">Forgot Password?</h2>
        <p className="text-gray-600">Enter your email to receive a reset link</p>
      </div>

        <div>
  <label
    htmlFor="email"
    className="block text-sm font-medium mb-1 text-black"
  >
    Enter your registered email
  </label>
  <input
    type="email"
    id="email"
    required
    placeholder="your.email@company.com"
    className="w-full px-3 py-2 bg-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-gray-300"
  />
</div>


        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Send Reset Link
        </button>

        <div className="text-center">
          <ArrowLeft className="inline-block mr-2 text-gray-600" />
          <a href="/login" className="text-sm text-gray-600 hover:underline">
            Back to Login
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default ForgotPassword;
