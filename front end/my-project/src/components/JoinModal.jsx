import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { X, ArrowLeft, CheckCircle } from 'lucide-react';
import { createVolunteer, resetVolunteer } from "../Redux/volunter/Action";

const JoinModal = ({ onClose }) => {
  const dispatch = useDispatch();
  
  // Get state directly from the Redux store.
  const { loading, error, success } = useSelector((state) => state.volunteer);

  // Updated state to use 'phone' and 'message' to match the backend payload.
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: "" 
  });

  // Reset form on successful submission.
  useEffect(() => {
    if (success) {
      setForm({ name: "", email: "", phone: "", message: "" });
    }
  }, [success]);

  // Reset volunteer state on mount (modal open)
  useEffect(() => {
    dispatch(resetVolunteer());
  }, [dispatch]);

  // Custom close handler to reset state and close modal
  const handleClose = () => {
    dispatch(resetVolunteer());
    onClose();
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createVolunteer(form));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Background overlay with blur and transparency */}
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={handleClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-2xl z-10">
        
        {/* Header with Close Button */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            {success ? (
              <button onClick={handleClose} className="text-gray-600 hover:text-blue-700 transition">
                <ArrowLeft size={24} />
              </button>
            ) : (
              <div className="w-6"></div>
            )}
            <h2 className="text-2xl font-bold text-gray-800">
              Join Us
            </h2>
          </div>
          <button onClick={handleClose} className="text-gray-600 hover:text-blue-700 transition">
            <X size={24} />
          </button>
        </div>

        {/* Conditional rendering for success or form */}
        {success ? (
          <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
            <CheckCircle size={64} className="text-green-500" />
            <p className="text-xl font-semibold text-green-700">Your request has been submitted successfully!</p>
            <button
              onClick={handleClose}
              className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Mobile Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <textarea
              name="message"
              placeholder="Reason for joining..."
              value={form.message}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-200 ${
                loading
                  ? "bg-purple-400 cursor-not-allowed"
                  : "bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && (
              <p className="text-center text-red-500 font-medium">{error}</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinModal;
