import React, { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("default");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const emailRef = useRef(null);
  const navigate = useNavigate();

  // Check token expiry on component mount
  useEffect(() => {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (tokenExpiry && new Date().getTime() > tokenExpiry) {
      // Token expired
      localStorage.clear();
      navigate("/login");
    }
  }, [navigate]);

  // Validation function
  const validate = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      newErrors.email = "Please enter a valid email address";

    if (!password.trim()) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (role === "default") newErrors.role = "Please select a role";

    return newErrors;
  };

  // Function to fetch username if backend doesn't return it
  const fetchUserName = async (userId, token) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/users/${userId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data?.name) {
        localStorage.setItem("userName", response.data.name);
      }
    } catch (error) {
      console.error("Failed to fetch user name:", error);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:4000/login/login",
        { email, password, role },
        { withCredentials: true }
      );

      const { token, user } = response.data;

      if (!token || !user || !user.role) {
        setLoading(false);
        toast.error("Invalid server response. Missing user or token.");
        return;
      }

      // Set token and expiry (12 hours)
      const expiryTime = new Date().getTime() + 12 * 60 * 60 * 1000; // 12 hours
      localStorage.setItem("token", token);
      localStorage.setItem("tokenExpiry", expiryTime);
      localStorage.setItem("role", user.role);
      localStorage.setItem("userId", user.id);

      // Store companyId for both admin and employee if available
      if (user.companyId) {
        localStorage.setItem("companyId", user.companyId);
      } else {
        localStorage.removeItem("companyId");
      }

      // Store userName
      if (user.name) {
        localStorage.setItem("userName", user.name);
      } else {
        await fetchUserName(user.id, token);
      }

      toast.success(`Logged in successfully as ${user.role}`, {
        autoClose: 2500,
        onClose: () => {
          navigate("/dashboard");
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      const message =
        error.response?.data?.message ||
        "Unable to login. Please check your credentials.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  // Autofocus email field if email error occurs
  useEffect(() => {
    if (errors.email && emailRef.current) {
      emailRef.current.focus();
    }
  }, [errors]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
      />

      <div className="grid h-screen w-full grid-cols-1 bg-white md:grid-cols-2">
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-[#E9F0FB] to-[#F6FBFF] p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1646215993316-c98f642303ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBDUk18ZW58MXx8fHwxNzU3ODg5MjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Office workspace"
            className="h-[270px] w-full max-w-md rounded-md object-cover transition-transform duration-300 hover:scale-105"
          />
          <h3 className="mt-6 text-lg font-semibold text-[#0F2133] md:text-xl">
            Welcome To CRM PRO
          </h3>
          <p className="mt-2 px-2 text-sm text-gray-500 md:px-0 md:text-base">
            Manage your customer relationships with our powerful, intuitive
            platform.
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-center px-6 py-12">
          <div className="mx-auto w-full max-w-md rounded-xl bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl">
            <div className="mb-6 flex flex-col items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-black text-xl font-bold text-white">
                C
              </div>
              <p className="text-sm text-gray-600">CRM Pro</p>
            </div>

            <div className="mb-6 space-y-1 text-center">
              <h2 className="text-lg font-semibold text-gray-700">Welcome Back</h2>
              <p className="text-gray-500">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
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
                  className={`w-full rounded-lg border bg-[#FBFDFF] px-4 py-3 text-gray-700 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Password */}
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
                    className={`w-full rounded-lg border bg-[#FBFDFF] px-4 py-3 pr-10 text-gray-700 placeholder-gray-400 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                )}
              </div>

              {/* Role */}
              <div className="mb-6">
                <label
                  htmlFor="role"
                  className="mb-1 block text-sm font-medium text-gray-700"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`w-full rounded-lg border bg-[#FBFDFF] px-4 py-3 text-gray-700 transition focus:border-orange-500 focus:outline-none focus:ring-4 focus:ring-gray-300 ${
                    errors.role ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="default">Select Role</option>
                  <option value="superAdmin">Super Admin</option>
                  <option value="admin">Admin</option>
                  <option value="employee">Employee</option>
                </select>
                {errors.role && (
                  <p className="mt-1 text-sm text-red-600">{errors.role}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`w-full rounded-lg bg-black py-3 font-medium text-white transition duration-300 hover:scale-[102%] hover:bg-gray-800 focus:outline-none ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading || role === "default"}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
