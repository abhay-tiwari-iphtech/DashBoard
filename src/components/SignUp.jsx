import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Info, Mail, Lock, User } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    address: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    imagePreview: "",
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [userExistsPopup, setUserExistsPopup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({
            ...prev,
            image: file,
            imagePreview: reader.result,
          }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!formData.email.includes("@"))
      newErrors.email = "Invalid email";

    if (!formData.password)
      newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Min 6 characters required";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Confirm your password";
    else if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

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

    const existingUser = JSON.parse(localStorage.getItem("user") || "null");

    // ❌ USER ALREADY EXISTS
    if (existingUser && existingUser.email === formData.email) {
      setUserExistsPopup(true);
      setTimeout(() => setUserExistsPopup(false), 2000);
      return;
    }

    // ✅ STORE USER
    const userToStore = {
      name: formData.name,
      dob: formData.dob,
      address: formData.address,
      email: formData.email,
      password: formData.password,
      image: formData.imagePreview,
    };

    localStorage.setItem("user", JSON.stringify(userToStore));

    // ✅ SUCCESS
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 relative">

      {/* USER EXISTS POPUP */}
      {userExistsPopup && (
        <div className="absolute top-6 right-6 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg">
          ⚠️ User already exists!
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showPopup && (
        <div className="absolute top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
          🎉 Account created successfully!
        </div>
      )}

      <div className="w-full max-w-6xl flex rounded-2xl overflow-hidden shadow-2xl">

        {/* LEFT IMAGE */}
        <div className="hidden md:flex w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="signup"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
            <h2 className="text-white text-2xl font-bold">
              Start your journey 🚀
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Create your account and manage everything in one place.
            </p>
          </div>
        </div>

        {/* FORM */}
        <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-8 overflow-y-auto max-h-[90vh]">

          <h2 className="text-3xl font-bold text-white mb-2">
            Create Account
          </h2>
          <p className="text-gray-300 mb-6">
            Sign up to get started
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full pl-10 py-3 bg-white/10 border rounded-lg text-white ${
                    errors.name ? "border-red-400" : "border-gray-600"
                  }`}
                />
              </div>
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* DOB */}
            <div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className={`w-full p-3 bg-white/10 border rounded-lg text-white ${
                  errors.dob ? "border-red-400" : "border-gray-600"
                }`}
              />
              {errors.dob && <p className="text-red-400 text-xs mt-1">{errors.dob}</p>}
            </div>

            {/* Address */}
            <div>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full p-3 bg-white/10 border rounded-lg text-white ${
                  errors.address ? "border-red-400" : "border-gray-600"
                }`}
              />
              {errors.address && <p className="text-red-400 text-xs mt-1">{errors.address}</p>}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 py-3 bg-white/10 border rounded-lg text-white ${
                    errors.email ? "border-red-400" : "border-gray-600"
                  }`}
                />
              </div>
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-20 py-3 bg-white/10 border rounded-lg text-white ${
                    errors.password ? "border-red-400" : "border-gray-600"
                  }`}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-10 top-3 text-gray-300"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

                <button
                  type="button"
                  onClick={() => setShowInfo(!showInfo)}
                  className="absolute right-3 top-3 text-gray-300"
                >
                  <Info size={18} />
                </button>

                {showInfo && (
                  <div className="absolute top-12 right-0 bg-gray-800 text-white text-xs p-3 rounded-lg w-56">
                    Password must:
                    <ul className="list-disc ml-4 mt-1">
                      <li>At least 6 characters</li>
                      <li>Letters & numbers</li>
                    </ul>
                  </div>
                )}
              </div>
              {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 bg-white/10 border rounded-lg text-white ${
                  errors.confirmPassword ? "border-red-400" : "border-gray-600"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
              )}
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold shadow-lg">
              Create Account
            </button>

            <p className="text-gray-400 text-sm text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;