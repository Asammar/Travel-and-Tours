import React from "react";

const Hero = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center bg-gray-100 px-4">
        <h2 className="text-4xl font-bold mb-4">
          Medium length hero heading goes here
        </h2>
        <p className="max-w-2xl text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Button
          </button>
          <button className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400">
            Button
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
