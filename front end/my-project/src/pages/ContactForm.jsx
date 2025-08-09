import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { createContact } from "../Redux/contact/Action"; 

const ContactForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, success, error, message } = useSelector(
    (state) => state.contact
  );

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  useEffect(() => {
    if (success) {
      setForm({ name: "", email: "", message: "" });
    }
  }, [success]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(form));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl p-8 bg-white rounded-lg shadow-lg grid md:grid-cols-2 gap-8">
                <div className="bg-blue-700 text-white rounded-lg p-8 flex flex-col justify-center">
          <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
          <p className="text-gray-200 mb-6">
            Feel free to reach out to us. We would love to hear from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <MapPin size={24} />
              <span>B2B world samasti pur</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone size={24} />
              <span>(123) 456-7890</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail size={24} />
              <span>contact@example.com</span>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-blue-700 transition">
              <ArrowLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold flex-grow text-center text-gray-800">
              Get In Touch
            </h2>
            <div className="w-6"></div> 
          </div>

          {success ? (
            <div className="flex flex-col items-center justify-center p-8 space-y-4 text-center">
              <CheckCircle size={64} className="text-green-500" />
              <p className="text-xl font-semibold text-green-700">{message || "Thank you for your message!"}</p>
              <button
                onClick={() => navigate(-1)}
                className="mt-4 py-2 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Go Back
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 text-white font-semibold rounded-lg transition-colors duration-200 ${
                  loading
                    ? "bg-blue-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                }`}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {error && (
                <p className="text-center text-red-500 font-medium">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
