import { ArrowLeft } from "lucide-react";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
const ResetLink = () => {
    const navigate = useNavigate();


  return (
<div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
  {/* Left Section (hidden on small screens) */}
  <div className="flex flex-1 flex-col items-center justify-center text-center bg-emerald-100 p-8">
    <div className="rounded-lg overflow-hidden mb-4">
      <img
        src="/resetlink.jpg"
        alt="Reset Link"
        className="rounded-lg object-cover w-80 h-80"
      />
    </div>
    <h2 className="text-xl text-black font-semibold">Check Your Email</h2>
    <p className="text-gray-600 mt-2">
     We've sent you secure instructions to reset your password
    </p>
  </div>

  {/* Right Section (Form) */}
  <div className="flex-1 flex items-center justify-center">
    <div className="bg-white rounded-xl p-2 w-full max-w-md">
      <div className="mx-auto flex items-center justify-center mb-8 bg-black text-white w-12 h-12 rounded-lg my-8">C</div>
      <h1 className="text-3xl font-semibold text-center text-gray-700 mb-10">CRM Pro</h1>


      <form className="space-y-4 shadow-md p-4">
        <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
      <Check className="w-8 h-8 text-green-600" />
    </div>
        <div className="text-center mb-8">
            
        <h2 className="text-xl text-black font-semibold">Reset Link Sent!</h2>
        <p className="text-gray-600">We have emailed you instructions to reset your password.</p>
      </div>

     <div class="flex items-start gap-2 p-4 rounded-lg bg-blue-50 border border-blue-100">
  <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
  <div class="text-sm text-blue-700">
    <p class="font-medium">Didn't receive the email?</p>
    <p>Check your spam folder or contact support if you continue to have issues.</p>
  </div>
</div>

        <button type="submit" onClick={() => navigate('/login')} className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Back to Login
        </button>

        <div className="text-center">
          <ArrowLeft className="inline-block mr-2 text-gray-600" />
          <a href="/forgot-password" className="text-sm text-gray-600 hover:underline">
            Try with a different email
          </a>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default ResetLink;
