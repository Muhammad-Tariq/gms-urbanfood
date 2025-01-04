import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50 overflow-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h1>

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 text-lg mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-lg mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-green-500 focus:outline-none h-32"
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg text-lg font-medium hover:bg-green-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Email</h3>
                  <p className="text-gray-600">contact@urbanfoodgarden.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Phone</h3>
                  <p className="text-gray-600">+92 (301) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-lg font-medium">Address</h3>
                  <p className="text-gray-600">
                    Islamabad Gulberg Greens
                    <br />
                    Guberg Hight, Office 509
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
