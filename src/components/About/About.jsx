import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About Us - Gadget Heaven";
  }, []);
  return (
    <>
  
      <section className="w-full bg-[#9538E2] flex items-center justify-center text-center flex-col gap-6 py-10">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          About Us
        </h1>
        <p className="text-white text-sm md:text-base w-[80%] mx-auto">
          We are your ultimate destination for the latest gadgets and
          accessories. Whether you’re a tech enthusiast or just looking for the
          coolest new products, we’ve got you covered.
        </p>
      </section>
      <div className="bg-gray-50 py-12 px-6 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center">
    
          <div className="text-center mb-16">
            <h2 className="text-xl md:text-3xl font-semibold text-purple-500 mb-6">
              Our Mission
            </h2>
            <p className="md:text-lg text-gray-700 leading-relaxed">
              Our goal is to bring the best technology to your doorstep at
              unbeatable prices. We believe in providing a great shopping
              experience with top-tier customer service, and we’re committed to
              helping you find the perfect gadgets to fit your needs.
            </p>
          </div>

 
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
   
            <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 6.5a1 1 0 112 0v7a1 1 0 11-2 0v-7z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 9a1 1 0 112 0v4a1 1 0 11-2 0V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Smartphones
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the latest phones from top brands, packed with features
                to make your life easier and more connected.
              </p>
              <a
                href="/"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Shop Smartphones
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-green-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 5.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Accessories
              </h3>
              <p className="text-gray-600 mb-4">
                From phone cases to wireless chargers, explore the best
                accessories to complement your gadgets.
              </p>
              <a
                href="/"
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Shop Accessories
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xl transform hover:scale-105 transition duration-300 ease-in-out text-center">
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-purple-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 10a7.5 7.5 0 1115 0A7.5 7.5 0 012.5 10zm13 0a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Wearables
              </h3>
              <p className="text-gray-600 mb-4">
                Track your health, monitor your fitness, and stay connected with
                the latest smartwatches and fitness bands.
              </p>
              <a
                href="/"
                className="text-purple-500 hover:text-purple-600 font-medium"
              >
                Shop Wearables
              </a>
            </div>
          </div>

          <div className="text-center mb-12">
            <a
              href="/"
              className="bg-[#9538E2] text-white md:text-lg py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Start Shopping Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
