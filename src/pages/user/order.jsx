import React, { useState } from 'react';
import NavBar from '../../components/ui/navbar';
import PrimaryButton from '../../components/ui/primarybutton';

// Order Form Page - handles customer orders
const Order = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    carModel: '',
    paymentMethod: 'credit-card',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Thank you for your order! We will contact you shortly.');
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <NavBar />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Complete Your Order
            </h1>
            <p className="text-gray-600 text-lg">
              Fill in your details to finalize your purchase
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personal Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Delivery Address *</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                      placeholder="123 Main St, City, State, ZIP"
                    />
                  </div>
                </div>
              </div>

              {/* Car Selection */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Car Selection</h3>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Select Car Model *</label>
                  <select
                    name="carModel"
                    value={formData.carModel}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  >
                    <option value="">Choose a model...</option>
                    <option value="tesla-model-s">Tesla Model S - $89,990</option>
                    <option value="bmw-m4">BMW M4 - $74,900</option>
                    <option value="mercedes-c-class">Mercedes-Benz C-Class - $43,550</option>
                    <option value="audi-a6">Audi A6 - $55,900</option>
                    <option value="porsche-911">Porsche 911 - $101,200</option>
                    <option value="lexus-es">Lexus ES - $40,900</option>
                  </select>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Payment Method</h3>
                
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit-card"
                      checked={formData.paymentMethod === 'credit-card'}
                      onChange={handleChange}
                      className="w-5 h-5 text-indigo-600"
                    />
                    <span className="text-gray-700 font-medium">Credit Card</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="bank-transfer"
                      checked={formData.paymentMethod === 'bank-transfer'}
                      onChange={handleChange}
                      className="w-5 h-5 text-indigo-600"
                    />
                    <span className="text-gray-700 font-medium">Bank Transfer</span>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="financing"
                      checked={formData.paymentMethod === 'financing'}
                      onChange={handleChange}
                      className="w-5 h-5 text-indigo-600"
                    />
                    <span className="text-gray-700 font-medium">Financing Option</span>
                  </label>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">Additional Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
                  placeholder="Any special requests or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg"
                >
                  Place Order
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-900 text-gray-400 text-center py-8 mt-12">
        <p className="text-sm">© 2025 Put your name here. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Order;
