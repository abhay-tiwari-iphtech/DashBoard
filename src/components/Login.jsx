import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [authError, setAuthError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [noUserPopup, setNoUserPopup] = useState(false); // ✅ NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setAuthError("");
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Invalid email";

    if (!formData.password)
      newErrors.password = "Password is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setAuthError("");

    const storedUser = JSON.parse(localStorage.getItem("user") || "null");

    // ❌ No user registered → SHOW POPUP
    if (!storedUser) {
      setNoUserPopup(true);

      setTimeout(() => {
        setNoUserPopup(false);
      }, 2000);

      return;
    }

    // ❌ Wrong credentials
    if (
      formData.email !== storedUser.email ||
      formData.password !== storedUser.password
    ) {
      setAuthError("Incorrect email or password ❌");
      return;
    }

    // ✅ Success
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 relative">

      {/* ❌ NO USER POPUP */}
      {noUserPopup && (
        <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
          ❌ No one is registered!
        </div>
      )}

      {/* ✅ SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          ✅ Login successful!
        </div>
      )}

      <div className="w-full max-w-5xl flex rounded-2xl overflow-hidden shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="dashboard"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <h2 className="text-white text-2xl font-bold">
              Manage your dashboard effortlessly
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Track analytics, manage users, and monitor everything in one place.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8">

          <h2 className="text-3xl font-bold text-white mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-300 mb-6">
            Login to continue
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* GLOBAL ERROR */}
            {authError && (
              <div className="bg-red-500/20 text-red-300 text-sm p-2 rounded-lg text-center">
                {authError}
              </div>
            )}

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 ${
                  errors.email
                    ? "border-red-400"
                    : "border-gray-600 focus:ring-2 focus:ring-blue-400"
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full pl-10 pr-3 py-3 bg-white/10 border rounded-lg text-white placeholder-gray-400 ${
                  errors.password
                    ? "border-red-400"
                    : "border-gray-600 focus:ring-2 focus:ring-blue-400"
                }`}
              />
              {errors.password && (
                <p className="text-red-400 text-xs mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold shadow-lg"
            >
              Login
            </button>
          </form>

          {/* Signup */}
          <p className="text-gray-400 text-sm mt-4">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-400 hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;