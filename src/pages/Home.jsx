import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/09/5f/53/095f5332e6e4c774bacb513684e38585.jpg')",
        }}
      >
        <div className="container mx-auto flex items-center justify-center h-full">
          <div className="text-center text-black bg-opacity-50 bg-white p-6 rounded-lg">
            <h2 className="text-5xl font-bold mb-4">
              Welcome to Purn Abhivyakti
            </h2>
            <p className="text-xl mb-8">
              Your portal to insightful content and community engagement
            </p>
            <a
              href="#editorial"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full"
            >
              Explore More
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-6">
        {/* Editorial Section */}
        <section id="editorial" className="py-8">
          <h2 className="text-3xl font-bold mb-4">Editorial</h2>
          <p className="mb-4">
            Welcome to the editorial section where we bring you the latest
            insights and stories from our experts.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1f5iqCn3F0v5jF38tYn5qBAn-gqKU2cbf1ZxJUr09wCPSdSHsZa0LujZgPZtqf9lukk0KnCiu8pErDGIPQZwxSllwzu1KzovqLLwNApmhvgT_4PhpX4B1IxEdfxK3eQWP9qJnP6s-o4g/s400/Cantik+dan+indahnya+alam.jpg"
                alt="Article"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">The Beauty of Nature</h3>
              <p className="mb-4">
                Discover the breathtaking landscapes and diverse ecosystems that
                make our planet unique. Join us as we explore the beauty of
                nature through stunning visuals and insightful narratives.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Read more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://blog.opalgroup.net/wp-content/uploads/2023/04/article-sustainable-living.jpg"
                alt="Article"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Sustainable Living</h3>
              <p className="mb-4">
                Learn how to live sustainably and reduce your environmental
                footprint. Our experts share tips and strategies for a greener
                lifestyle, from eco-friendly products to energy-saving
                practices.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Read more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://cdn.dnaindia.com/sites/default/files/2014/04/22/229829-pattadakal.jpg?im=FitAndFill=(1200,900)"
                alt="Article"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Cultural Heritage</h3>
              <p className="mb-4">
                Explore the rich cultural heritage of different regions and
                communities. From traditional arts and crafts to historical
                landmarks, delve into the stories that shape our collective
                identity.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Read more
              </a>
            </article>
          </div>
        </section>

        {/* Mahamrityunjay Manav Section */}
        <section id="mahamrityunjay" className="py-8 p-8 bg-gray-200">
          <h2 className="text-3xl font-bold mb-4">Mahamrityunjay Manav</h2>
          <p className="mb-4">
            A special section dedicated to the great personalities who inspire
            us.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://d.ibtimes.co.uk/en/full/1461456/mahatma-gandhi.webp?w=736&f=22bb0af728b22b34b9e59b3c4a009556"
                alt="Personality"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Mahatma Gandhi</h3>
              <p className="mb-4">
                Mahatma Gandhi was a visionary leader whose principles of
                non-violence and civil disobedience have inspired generations
                worldwide. His relentless pursuit of justice and equality
                remains a beacon of hope for humanity.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://cdn.britannica.com/42/155442-050-AB85E00E/Mother-Teresa.jpg?w=400&h=300&c=crop"
                alt="Personality"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Mother Teresa</h3>
              <p className="mb-4">
                Mother Teresa dedicated her life to serving the poorest of the
                poor. Her compassion and selflessness earned her the Nobel Peace
                Prize and left an indelible mark on the world.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
            <article className="bg-white shadow-md rounded-lg p-6">
              <img
                src="https://www.unisa.ac.za/static/corporate_web/Content/UHM/personalities/images/President%20Nelson%20Mandela.jpg"
                alt="Personality"
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">Nelson Mandela</h3>
              <p className="mb-4">
                Nelson Mandela's fight against apartheid and his leadership in
                promoting reconciliation and justice have made him a symbol of
                courage and resilience. His legacy continues to inspire people
                worldwide.
              </p>
              <a href="#" className="text-indigo-600 hover:underline">
                Learn more
              </a>
            </article>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-8">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="mb-4">
            Purn Abhivyakti is dedicated to bringing you the most engaging and
            informative content. Our mission is to foster a community where
            ideas and knowledge can flourish.
          </p>
          <p className="mb-4">
            We are a team of passionate writers, researchers, and creators
            committed to delivering high-quality content that resonates with our
            audience. Join us on this journey to explore the diverse world of
            ideas and stories.
          </p>
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-full"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Purn Abhivyakti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
