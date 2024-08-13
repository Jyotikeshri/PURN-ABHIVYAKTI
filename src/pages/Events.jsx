import React from "react";
import Navbar from "../components/Navbar";

const Events = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://source.unsplash.com/1600x900/?events')",
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-black">
            <h2 className="text-5xl font-bold mb-4">Upcoming Events</h2>
            <p className="text-xl mb-8">
              Join us for exciting events and workshops
            </p>
            <a
              href="#events"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full"
            >
              View Events
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Events Section */}
        <section id="events" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Our Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://www.visittnt.com/blog/wp-content/uploads/2019/09/navratri.jpg"
                alt="Event"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Cultural Fest</h3>
              <p className="mb-4">
                Join us for a vibrant celebration of culture with performances,
                workshops, and more.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.iUTAVIWwVA7TIihO89F7rgHaFO&pid=Api&P=0&h=180"
                alt="Workshop"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Art Workshop</h3>
              <p className="mb-4">
                Participate in our art workshop to enhance your skills and
                connect with fellow artists.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://www.thestatesman.com/wp-content/uploads/2023/01/modi-e1672819299271.jpg"
                alt="Conference"
                className="w-full h-64 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Annual Conference</h3>
              <p className="mb-4">
                Attend our annual conference to engage with thought leaders and
                industry experts.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
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
                <a href="#events" className="hover:text-gray-300">
                  Events
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Events;
