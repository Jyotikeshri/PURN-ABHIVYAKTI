import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 h-16 fixed bottom-0 left-0 w-full z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        <p className="text-black">&copy; 2023 Purn Abhivyakti</p>
        <ul className="hidden md:flex items-center">
          <li className="mr-4">
            <a href="#" className="text-black hover:text-green-600">
              About Us
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-green-600">
              Photo Gallery
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-green-600">
              Subscription
            </a>
          </li>
          <li className="mr-4">
            <a href="#" className="text-black hover:text-green-600">
              Ahun Gaon ka Itihaas Book
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
