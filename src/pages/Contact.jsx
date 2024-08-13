import React from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?contact')",
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-black">
            <h2 className="text-5xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl mb-8">
              We'd love to hear from you. Reach out to us with any questions or
              feedback.
            </p>
            <a
              href="#contact-form"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Contact Form Section */}
        <section id="contact-form" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
          <form className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-md"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="w-full px-6 flex items-center justify-between">
          <p>&copy; 2024 Purn Abhivyakti. All rights reserved.</p>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#contact-form" className="hover:text-gray-300">
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
