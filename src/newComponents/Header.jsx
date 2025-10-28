import { useEffect, useState } from "react";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("Loading...");
  const [roleName, setRoleName] = useState("");

  const role = localStorage.getItem("role") || "";
  const id = localStorage.getItem("userId") || "";

  // 🧩 Fetch user details from API
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!id || !role) return;

        let url =
          role.toLowerCase() === "admin"
            ? `http://localhost:4000/getAdmin/${id}`
            : `http://localhost:4000/employee/getEmployee/${id}`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Failed to fetch user data");

        const data = await res.json();

        // ✅ Handle both admin and employee responses safely
        if (role.toLowerCase() === "admin" && data.admin) {
          setUserName(data.admin.fullName || "Admin");
          setRoleName("Admin");
        } else if (data.employee) {
          setUserName(data.employee.fullName || "Employee");
          setRoleName(data.employee.role || "Employee");
        } else {
          setUserName("User");
          setRoleName(role);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
        setUserName("Unknown");
        setRoleName(role);
      }
    };

    fetchUser();
  }, [id, role]);

  // 🧭 Logout
  const handleLogout = () => {
    localStorage.clear();
    console.log("User logged out");
    navigate("/"); // Redirect to login page
  };

  return (
    <header className="flex h-[10vh] w-[82vw] items-center justify-between bg-white px-6 shadow-md">
      <div>
        <h1 className="text-[28px] font-semibold text-gray-500">Dashboard Overview</h1>
      </div>

      <div className="flex items-center gap-6">
        {/* 👤 User Info */}
        <div className="flex items-center gap-3 rounded-md p-2">
          <div className="flex h-[45px] w-[45px] items-center justify-center rounded-full bg-gray-200 text-[20px] font-semibold text-black">
            {userName.charAt(0)?.toUpperCase() || "U"}
          </div>
          <div className="flex flex-col">
            <span className="text-[18px] font-medium text-gray-700">{userName}</span>
            {roleName && <span className="text-sm text-gray-400 capitalize">{roleName}</span>}
          </div>
        </div>

        {/* 🚪 Logout Button */}
        <button
          onClick={handleLogout}
          className="rounded-md p-2 transition-colors duration-200 hover:bg-red-200"
        >
          <FiLogOut size={20} className="text-red-600" />
        </button>
      </div>
    </header>
  );
};

export default Header;
