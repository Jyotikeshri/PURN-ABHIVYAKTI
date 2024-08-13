import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?culture')",
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-black">
            <h2 className="text-5xl font-bold mb-4">About Purn Abhivyakti</h2>
            <p className="text-xl mb-8">
              Discover the journey and mission of Purn Abhivyakti
            </p>
            <a
              href="#mission"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Mission Section */}
        <section id="mission" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Purn Abhivyakti, we aim to create a platform that celebrates and
            promotes cultural exchange and artistic expression. We believe in
            the power of creativity to bring people together and foster mutual
            understanding.
          </p>
        </section>

        {/* Vision Section */}
        <section id="vision" className="py-8 bg-gray-200 p-8">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="mb-4">
            Our vision is to build a global community where artists, thinkers,
            and cultural enthusiasts can collaborate and share their work with a
            wider audience. We strive to be a beacon of creativity and
            inspiration for all.
          </p>
        </section>

        {/* Team Section */}
        <section id="team" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Meet the Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://openclassrooms-student-center.github.io/bootstrap-5-EN/img/portrait.jpg"
                alt="Team Member"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">John Doe</h3>
              <p className="mb-4">Founder & CEO</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://www.mahindra.com/sites/default/files/employee-stories/Sneha_551x439.png"
                alt="Team Member"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
              <p className="mb-4">Creative Director</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://procaffenation.com/wp-content/uploads/2017/03/raghu-raman-672x470.jpg?ezimgfmt=rs:808x565/rscb9/ng:webp/ngcb9"
                alt="Team Member"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Robert Brown</h3>
              <p className="mb-4">Head of Marketing</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white py-6">
        <div className="w-full px-6 flex items-center justify-between">
          <p>&copy; 2024 Purn Abhivyakti. All rights reserved.</p>
          <div>
            <ul className="flex space-x-4">
              <li>
                <a href="#mission" className="hover:text-gray-300">
                  Mission
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-gray-300">
                  Vision
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-gray-300">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
