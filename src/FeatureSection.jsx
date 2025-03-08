const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Long heading is what you see here in this feature section.
        </h2>
        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Image Placeholder */}
      <div className="md:w-1/2 flex justify-center w-full">
        <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-300 flex items-center justify-center rounded-lg">
          <span className="text-gray-500">Image Placeholder</span>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
